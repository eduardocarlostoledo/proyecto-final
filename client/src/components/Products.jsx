import "./Products.css";
import Json from "./Productos_PF.json"

export const Products = () => {
  return (
    <div className="DivProducts">
      <h1>Products</h1>
      <div className="DivCardsFilters">
        <div className="DivFilter">
        <h2>Filters</h2>

        </div>
        <div className="DivAllCards">
          { Json.map( (prod) => (
            <div className="DivCard">
              <img src={prod.image}></img>
              <h2>{prod.name}</h2>
              <h3>{prod.price}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
