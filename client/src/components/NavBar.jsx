import { Link } from "react-router-dom";
import '../styles/NavBar.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {FaUserCircle} from 'react-icons/fa';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCart } from "../redux/actions/CartActions";



export const NavBar = () => {   

    let Nav = useSelector((state) => state.ChangeNav);
    

    const dispatch = useDispatch();
    // let carts = useSelector((state) => state.cart)
    // const itemQuantity = carts.reduce((acc, item) => acc + item.amount, 0);
    

    // useEffect(()=>{
    //     dispatch(getCart())
    // },[dispatch])
    const [cartQuantity, setCartQuantity] = useState(0);
    const carts = useSelector((state) => state.cart);
    const itemQuantity = cartQuantity;
    useEffect(() => {
        dispatch(getCart());
        setCartQuantity(carts.reduce((acc, item) => acc + item.amount, 0));
    }, [dispatch, carts]);
    
    useEffect(() => {
        setCartQuantity(carts.reduce((acc, item) => acc + item.amount, 0));
    }, [carts]);
      
    
    
    return (
        <div className="NavDiv">   
            <div className="BuildAndProducts">
                <Link to="/"><button><ion-icon className="iconHome" name="home-outline"></ion-icon> Home</button></Link>
                <Link to="/Products"><button>Products</button></Link>
                <Link to="/BuildPc"><button>Build PC</button></Link>
                <Link to="/CreateProduct"><button>Create</button></Link>
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
