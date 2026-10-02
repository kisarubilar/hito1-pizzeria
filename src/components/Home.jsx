import { useState, useEffect } from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas as fallbackPizzas } from '../pizzas'; // Importa el array del Hito 3

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/pizzas');
      if (!response.ok) throw new Error('Respuesta no exitosa');
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.warn('API local no alcanzable, cargando catálogo de respaldo:', error);
      setPizzas(fallbackPizzas);
    }
  };

  return (
    <>
      <Header />
      <div className="container my-4">
        <div className="row g-4">
          {pizzas.map((pizza) => (
            <div className="col-12 col-md-6 col-lg-4" key={pizza.id}>
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;