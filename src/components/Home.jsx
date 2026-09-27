import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from '../pizzas'; // Ajusta la ruta según dónde guardaste pizzas.js

const Home = () => {
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