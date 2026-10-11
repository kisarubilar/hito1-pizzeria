import { useState } from 'react';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validarDatos = (e) => {
    e.preventDefault();

    // Validar campos vacíos
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert('Todos los campos son obligatorios!');
      return;
    }

    // Validar largo de contraseña (mínimo 6 caracteres)
    if (password.length < 6) {
      alert('Password must be at least 6 characters!');
      return;
    }

    // Validar coincidencia de contraseñas
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Si pasa todas las validaciones
    alert('Authentication successful!');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <form onSubmit={validarDatos} style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="mb-4 text-start">Register</h2>
        
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

        <div className="mb-3 text-start">
          <label className="form-label fw-bold">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </div>

        <button type="submit" className="btn btn-primary w-auto px-4">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;