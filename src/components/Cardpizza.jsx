import { formatNumber } from '../utils/format';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title fw-bold text-capitalize">{name}</h5>
        <hr />
        <p className="card-text text-muted mb-2">🍕 Ingredientes:</p>
        <ul className="list-unstyled">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="text-capitalize small">
              🍕 {ingredient}
            </li>
          ))}
        </ul>
        <hr />
        <p className="fs-5 fw-bold text-center">
          Precio: ${formatNumber(price)}
        </p>
        <div className="d-flex justify-content-around mt-3">
          <button className="btn btn-outline-dark btn-sm">Ver Más 👀</button>
          <button className="btn btn-dark btn-sm">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;