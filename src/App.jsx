import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Footer from './components/Footer';
// import Home from './components/Home';
// import RegisterPage from './components/RegisterPage';
// import LoginPage from './components/LoginPage';
import './App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      <main className="flex-grow-1">
        {/* Descomenta la vista que necesites evaluar */}
        {/* <Home /> */}
        {/* <RegisterPage /> */}
        {/* <LoginPage /> */}
        <Cart />
      </main>

      <Footer />
    </div>
  );
}

export default App;