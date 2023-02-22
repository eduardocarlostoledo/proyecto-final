import "../styles/Products.css";
import Card from './Card'
import Cooler from '../images/Cooler.png'
import Samsung from '../images/Samsung.png'
import intel from '../images/intel.png'
import nvidia from '../images/nvidia.png'
import Corsair from '../images/Corsair.png'
import Asus from '../images/Asus.png'
import Logitech from '../images/Logitech.png'
import HyperX from '../images/HyperX.png'
import Razer from '../images/Razer.png'
import Steel from '../images/Steel.png'
import Ryzen from '../images/Ryzen.png'
import Aorus from '../images/Aorus.png'
import Gigabyte from '../images/Gigabyte.png'
import Seagate from '../images/Seagate.png'
import Viper from '../images/Viper.png'
import Msi from '../images/Msi.png'
import Evga from '../images/Evga.png'
import Acer from '../images/Acer.png'
import Predator from '../images/Predator.png'
import AudioT from '../images/AudioT.png'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getPage } from "../redux/actions/ProductActions";
import { Filters } from "./Filters";

export const Products = () => {

    const dispatch = useDispatch()
    const products = useSelector((state) => state.paginatedProducts)
    
    useEffect(() => {
      dispatch(getPage(1,'','',''))
    },[dispatch]);

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
                        <img src={Corsair} width='40px' alt="" />
                    </div>
                    <div className="MarcaContainer">
                        <img src={Asus} width='50px' alt="" />
                    </div>
                    <div className="MarcaContainer">
                        <img src={Logitech} width='50px' alt="" />
                    </div>
                    <div className="MarcaContainer">
                        <img src={HyperX} width='40px' alt="" />
                    </div>
                    <div className="MarcaContainer">
                        <img src={Razer} width='40px' alt="" />
                    </div>
                    <div className="MarcaContainer">
                        <img src={Steel} width='40px' alt="" />
                    </div>
                    <div className="MarcaContainer">
                        <img src={Ryzen} width='40px' alt="" />
                    </div>
                    <div className="MarcaContainer">
                        <img src={Aorus} width='40px' alt="" />
                    </div>
                    <div className="MarcaContainer">
                        <img src={Gigabyte} width='40px' alt="" />
                    </div>
                    <div className="MarcaContainer">
                        <img src={Seagate} width='50px' alt="" />
                    </div>
                    <div className="MarcaContainer">
                        <img src={Viper} width='40px' alt="" />
                    </div>
                    <div className="MarcaContainer">
                        <img src={Msi} width='40px' alt="" />
                    </div>
                    <div className="MarcaContainer">
                        <img src={Evga} width='40px' alt="" />
                    </div>
                    <div className="MarcaContainer">
                        <img src={Acer} width='40px' alt="" />
                    </div>
                    <div className="MarcaContainer">
                        <img src={Predator} width='40px' alt="" />
                    </div>
                    <div className="MarcaContainer">
                        <img src={AudioT} width='40px' alt="" />
                    </div>
              </div>
              <Filters/>
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
