import { Link } from "react-router-dom";
import '../styles/NavBar.css';
import { Search } from "./Search";
import { AiOutlineShoppingCart } from 'react-icons/ai';


export const NavBar = () => {
    return (
        <div className='NavDiv'>
        <div className="BuildAndProducts">
        <Link to="/"><button><ion-icon className="iconHome" name="home-outline"></ion-icon>HOME</button></Link>
        <Link to="/Products"><button>PRODUCTS</button></Link>
        <Link to="/BuildPc"><button>BUILD PC</button></Link>
            </div>
        <div className="ContainerSearch">
            <Search />
        </div>
        <div className="ContainerInfo">
            <div className="LogAndSign">
            <Link to="/Login"><button className="BtnUser" >Log in</button></Link>
            <Link to="/Register"><button className="BtnUser">Sign up</button></Link>
            </div>
               <button className="CartContainer"> <AiOutlineShoppingCart className="Cart" /></button>
        </div>
    </div>
    )
}