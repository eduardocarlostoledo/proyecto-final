import "../styles/Products.css";
import Card from './Card'

export const Products = () => {
  return (
    <div className="DivProducts">
      <h1>Products</h1>
      <div className="DivCardsFilters">
        <div className="DivFilter">
        <h2>Filters</h2>

        </div>
        <Card></Card>
      </div>
    </div>
  );
};
