import Header from './Header';
import CardPizza from './Cardpizza';
import { formatNumber } from '../utils/format';

const Home = () => {
  return (
    <>
      {/* El Header va arriba y ocupa todo el ancho de la pantalla */}
      <Header />

      {/* El container solo envuelve la grilla de las tarjetas */}
      <div className="container my-4">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <CardPizza
              name="Napolitana"
              price={formatNumber(5950)}
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              img="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=600&auto=format&fit=crop"
            />
          </div>
          <div className="col-12 col-md-4">
            <CardPizza
              name="Española"
              price={formatNumber(6950)}
              ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
              img="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop"
            />
          </div>
          <div className="col-12 col-md-4">
            <CardPizza
              name="Pepperoni"
              price={formatNumber(6950)}
              ingredients={["mozzarella", "pepperoni", "orégano"]}
              img="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=600&auto=format&fit=crop"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;