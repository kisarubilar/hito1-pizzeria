import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Pizza from './components/Pizza';
// import Home from './components/Home';
// import Cart from './components/Cart';
// import RegisterPage from './components/Register';
// import LoginPage from './components/Login';
import './App.css';

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      <main className="flex-grow-1">
        {/* <Home /> */}
        {/* <RegisterPage /> */}
        {/* <LoginPage /> */}
        {/* <Cart /> */}
        <Pizza />
      </main>

      <Footer />
    </div>
  );
};

export default App;