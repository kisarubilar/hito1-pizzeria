import { useState } from 'react';
import { pizzaCart, pizzas } from '../pizzas';
import { formatNumber } from '../utils/format';

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  // Función para aumentar la cantidad de una pizza
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  // Función para disminuir cantidad (y eliminar si lega a 0)
  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  // Cálculo del total acumulado
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <div className="container my-5" style={{ maxWidth: '600px' }}>
      <div className="card p-4 shadow-sm">
        <h4 className="fw-bold mb-4">Detalles del pedido:</h4>
        
        {cart.length === 0 ? (
          <p className="text-muted">El carrito está vacío.</p>
        ) : (
          cart.map((pizza) => (
            <div
              key={pizza.id}
              className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2"
            >
              <div className="d-flex align-items-center gap-3">
                <img
                  src={pizza.img}
                  alt={pizza.name}
                  style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <h6 className="mb-0 text-capitalize fw-bold">{pizza.name}</h6>
              </div>

              <div className="d-flex align-items-center gap-3">
                <span className="fw-bold">${formatNumber(pizza.price * pizza.count)}</span>
                <button
                  className="btn btn-outline-danger btn-sm px-2"
                  onClick={() => decreaseQuantity(pizza.id)}
                >
                  -
                </button>
                <span className="fw-bold">{pizza.count}</span>
                <button
                  className="btn btn-outline-primary btn-sm px-2"
                  onClick={() => increaseQuantity(pizza.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}

        <div className="mt-4">
          <h3 className="fw-bold">Total: ${formatNumber(total)}</h3>
          <button className="btn btn-dark mt-3" disabled={cart.length === 0}>
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;