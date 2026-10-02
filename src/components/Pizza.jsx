import { useState, useEffect } from 'react';
import { formatNumber } from '../utils/format';

// Datos de respaldo por si el servidor local no está disponible (ej: en el celular)
const fallbackPizza = {
  id: "p001",
  name: "napolitana",
  price: 5950,
  ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
  img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop&q=60",
  desc: "La pizza Napolitana es un clásico de la cocina italiana con base crujiente, suave salsa de tomate, mozzarella fresca, jamón cocido de alta calidad y un toque de orégano."
};

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    getPizza();
  }, []);

  const getPizza = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/pizzas/p001');
      if (!response.ok) throw new Error('Respuesta no exitosa');
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.warn('API local no alcanzable, cargando datos de respaldo:', error);
      setPizza(fallbackPizza); // Si falla la API local, carga la pizza de respaldo
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