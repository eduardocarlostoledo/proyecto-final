import { Link } from "react-router-dom";
import '../styles/NavBar.css';
import { Search } from "./Search";
import { AiOutlineShoppingCart } from 'react-icons/ai';


export const NavBar = () => {
    return (
        // <div className='NavDiv'>
        //     <Search/>
        //     <div className='NavDiv2'>

        //         <Link to="/" className="NavLink">home</Link>

        //         <Link to="/Products" className="NavLink">products</Link>

        //         <Link to="/BuildPc" className="NavLink">build pc</Link>

        //         <Link to="/Register" className="NavLink">Register</Link>

        //         <Link to="/Profile" className="NavLink">Profile</Link>
        //     </div>
        // </div>
        <div className='NavDiv'>
        <div className="BuildAndProducts">
        <Link to="/"><button><ion-icon name="home-outline"></ion-icon> Home </button></Link>
        <Link to="/Products"><button>Products</button></Link>
        <Link to="/BuildPc"><button>Build PC</button></Link>
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