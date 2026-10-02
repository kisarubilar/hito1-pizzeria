import { useState, useEffect } from 'react';
import { formatNumber } from '../utils/format';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    getPizza();
  }, []);

  const getPizza = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/pizzas/p001');
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.error('Error al obtener la pizza:', error);
    }
  };

  if (!pizza) {
    return (
      <div className="text-center my-5 py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5" style={{ maxWidth: '800px' }}>
      <div className="card shadow-sm overflow-hidden">
        <div className="row g-0 align-items-center">
          <div className="col-md-6">
            <img
              src={pizza.img}
              className="img-fluid rounded-start h-100 object-fit-cover"
              alt={pizza.name}
              style={{ minHeight: '300px', width: '100%' }}
            />
          </div>
          <div className="col-md-6">
            <div className="card-body p-4">
              <h3 className="card-title text-capitalize fw-bold mb-2">
                {pizza.name}
              </h3>
              <p className="card-text text-muted small mb-3">
                {pizza.desc}
              </p>
              <p className="fw-bold mb-1">🍕 Ingredientes:</p>
              <ul className="list-unstyled mb-3">
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-capitalize small">
                    🍕 {ingredient}
                  </li>
                ))}
              </ul>
              <div className="d-flex align-items-center justify-content-between pt-2 border-top">
                <span className="fs-4 fw-bold">
                  Precio: ${formatNumber(pizza.price)}
                </span>
                <button className="btn btn-dark btn-sm px-3">
                  Añadir 🛒
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;