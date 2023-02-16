import "../styles/Products.css";
import Card from './Card'
import Cooler from '../images/Cooler.png'
import Samsung from '../images/Samsung.png'
import intel from '../images/intel.png'
import nvidia from '../images/nvidia.png'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllProducts } from "../redux/actions/ProductActions";

export const Products = () => {
  const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(getAllProducts())
    },[dispatch]);
    const products=useSelector(state=>state.products)

  return (
    <div className="DivProducts">
      <div className="Products">
        <div className="DivCardsFilters">
            <div className="DivFilter">
            <h2>Filters</h2>
              <div className="Marcas">
                  <div className="MarcaContainer">
                    <img src={Cooler} width='50px' alt="" />
                  </div>
                  <div className="MarcaContainer">
                    <img src={Samsung} width='50px' alt="" />
                  </div >
                  <div className="MarcaContainer">
                    <img src={intel} width='30px' alt="" />
                  </div>
                  <div className="MarcaContainer">
                    <img src={nvidia} width='30px' alt="" />
                  </div>
                  <div className="MarcaContainer">
                    <img src={Cooler} width='50px' alt="" />
                  </div>
                </div>
            </div>
          
            <div className="CardContainer">
                {products?.map((p) => (
                    <Card
                        id={p.id}
                        name={p.name}
                        price={p.price}
                        image={p.image}
                    />))}
            </div>
        </div>
      </div>
    </div>
  );
};
