import { Link } from "react-router-dom";
import '../styles/NavBar.css';
import { Search } from "./Search";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {FaUserCircle} from 'react-icons/fa';


export const NavBar = () => {
    return (
        <div className="NavDiv">
            {/* //Modelo Boostrap para navbar 
            
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/Products">Products</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/BuildPc">BuildPc</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/CreateProducts">Create</a>
                        </li>
                    </ul>
                    
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    
                    </div>
                </div>
            </nav> */}
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
            <Link to="/Profile"><button className="BtnUser"><FaUserCircle className="Cart"/></button></Link>
            </div>
        </div>
    
    </div>
    )
}
