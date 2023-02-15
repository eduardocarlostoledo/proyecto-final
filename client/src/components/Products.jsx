import "../styles/Products.css";
import Card from './Card'
import Cooler from '../images/Cooler.png'
import Samsung from '../images/Samsung.png'
import intel from '../images/intel.png'
import nvidia from '../images/nvidia.png'

export const Products = () => {
  return (
    <div className="DivProducts">
      <div className="Products">
        <h1>Products</h1>
        <div className="Marcas">
            <div className="MarcaContainer">
              <img src={Cooler} width='100px' alt="" />
            </div>
            <div className="MarcaContainer">
              <img src={Samsung} width='100px' alt="" />
            </div >
            <div className="MarcaContainer">
              <img src={intel} width='50px' alt="" />
            </div>
            <div className="MarcaContainer">
              <img src={nvidia} width='50px' alt="" />
            </div>
            <div className="MarcaContainer">
              <img src={Cooler} width='100px' alt="" />
            </div>
          </div>
        <div className="DivCardsFilters">
            <div className="DivFilter">
              <h2>Filters</h2>
            </div>
          
          <Card/>
        </div>
      </div>
    </div>
  );
};
