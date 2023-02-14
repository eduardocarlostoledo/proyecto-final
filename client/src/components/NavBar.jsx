import { Link } from "react-router-dom";
import '../styles/NavBar.css';
import { Search } from "./Search";

export const NavBar = () => {
    return(
        <div className='NavDiv'>
            <Search/>
            <div className='NavDiv2'>

                <Link to="/" className="NavLink">home</Link>

                <Link to="/Products" className="NavLink">products</Link>

                <Link to="/BuildPc" className="NavLink">build pc</Link>

                <Link to="/Register" className="NavLink">Register</Link>

                <Link to="/Profile" className="NavLink">Profile</Link>
            </div>
        </div>
        
    )
}