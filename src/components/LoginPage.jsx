import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validarDatos = (e) => {
    e.preventDefault();

    // Validar campos vacíos
    if (!email.trim() || !password.trim()) {
      alert('Todos los campos son obligatorios!');
      return;
    }

    // Validar largo de contraseña (mínimo 6 caracteres)
    if (password.length < 6) {
      alert('Password must be at least 6 characters!');
      return;
    }

    // Si pasa todas las validaciones
    alert('Authentication successful!');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <form onSubmit={validarDatos} style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="mb-4 text-start">Login</h2>
        
        <div className="mb-3 text-start">
          <label className="form-label fw-bold">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="mb-3 text-start">
          <label className="form-label fw-bold">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button type="submit" className="btn btn-primary w-auto px-4">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;