import { Link } from "react-router-dom";
import '../styles/NavBar.css';
import { Search } from "./Search";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {FaUserCircle} from 'react-icons/fa';


export const NavBar = () => {
    return (
        <div className='NavDiv'>
        <div className="BuildAndProducts">
        <Link to="/"><button><ion-icon className="iconHome" name="home-outline"></ion-icon> Home</button></Link>
        <Link to="/Products"><button>Products</button></Link>
        <Link to="/BuildPc"><button>Build PC</button></Link>
        <Link to="/CreateProduct"><button>Create</button></Link>
            </div>
        <div className="ContainerSearch">
            <Search />
        </div>
        <div className="ContainerInfo">
            <div className="LogAndSign">
            <Link to="/Login"><button className="BtnLogSing" >Log in</button></Link>
            <Link to="/Register"><button className="BtnLogSing">Sign up</button></Link>
            </div>
            <Link to="/Profile"><button className="BtnUser"><FaUserCircle className="Cart"/></button></Link>
               <button className="CartContainer"> <AiOutlineShoppingCart className="Cart" /></button>
        </div>
    </div>
    )
}
