import { Link } from "react-router-dom";
import '../styles/NavBar.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {FaUserCircle} from 'react-icons/fa';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCart, getUpdate } from "../redux/actions/CartActions";
import { update } from "../redux/actions/CartActions";



export const NavBar = () => {   

    let Nav = useSelector((state) => state.ChangeNav);
    

    const dispatch = useDispatch();
    const up = useSelector((state) => state.update)
    
    const carts = useSelector((state) => state.cart);
    const itemQuantity = carts.reduce((acc, item) => acc + item.amount, 0);
    
    useEffect(() => {
        dispatch(getUpdate())
        dispatch(getCart());
        dispatch(update(false))
    }, [up]);
    
    
    return (
        <div className="NavDiv">   
            <div className="BuildAndProducts">
                <Link to="/"><button><ion-icon className="iconHome" name="home-outline"></ion-icon> Home</button></Link>
                <Link to="/Products"><button>Products</button></Link>
                <Link to="/BuildPc"><button>Build PC</button></Link>
                <Link to="/CreateProduct"><button>Create</button></Link>
                <Link to="/Orders"><button>Orders</button></Link> 
            </div>
        {/* <div className="ContainerSearch">
            <Search />
        </div> */}
        <div className="ContainerInfo">
           { !Nav ? <div className="LogAndSign">
            <Link to="/Login"><button className="BtnLogSing" >Log in</button></Link>
            <Link to="/Register"><button className="BtnLogSing">Sign up</button></Link>
            </div>  :  <Link to="/Profile"><button className="BtnUser"><FaUserCircle className="UserLogo"/></button></Link> 
            }  
            <Link to='/Cart'>
                <button className="CartContainer"> <AiOutlineShoppingCart className="Cart" />{itemQuantity}</button>
            </Link>      
            
            
            
        </div>
    
    </div>
    )
}
