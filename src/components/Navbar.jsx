import { Link } from 'react-router-dom';

const Navbar = () => {
  const total = 25000;
  const token = false; // Simulación de token

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          Pizzería Mamma Mía!
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
            <li className="nav-item">
              <Link to="/" className="btn btn-outline-light btn-sm">
                🍕 Home
              </Link>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <Link to="/profile" className="btn btn-outline-light btn-sm">
                    🔓 Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light btn-sm">
                    🔒 Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="btn btn-outline-light btn-sm">
                    🔐 Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="btn btn-outline-light btn-sm">
                    🔐 Register
                  </Link>
                </li>
              </>
            )}
          </ul>
          <Link to="/cart" className="btn btn-outline-info btn-sm">
            🛒 Total: ${total.toLocaleString()}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;