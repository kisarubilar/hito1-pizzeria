const Profile = () => {
  return (
    <div className="container my-5 text-center" style={{ maxWidth: '500px' }}>
      <div className="card shadow-sm p-4">
        <h2 className="fw-bold mb-3">Mi Perfil</h2>
        <p className="text-muted mb-4">Email: <strong>usuario@example.com</strong></p>
        <button className="btn btn-danger w-100">Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default Profile;