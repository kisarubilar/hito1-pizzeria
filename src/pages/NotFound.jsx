import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container text-center my-5 py-5">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3">¡Página no encontrada!</h2>
      <p className="text-muted mb-4">
        La página que estás buscando no existe o fue movida.
      </p>
      <Link to="/" className="btn btn-dark px-4">
        Volver al Inicio 🏠
      </Link>
    </div>
  );
};

export default NotFound;