import React from "react";
import "../styles/Card.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { addToCart, deleteOneCart ,getCart,update} from "../redux/actions/CartActions";

export default function ItemCart({name, image, price, amount,prodId,handleDeleteAllCart}) {

    const dispatch=useDispatch();
    const cart= useSelector((state) => state.cart);

    const handleAdd=()=>{
        dispatch(addToCart({name, image,  price}))
        dispatch(update(true)) //2 a 3
    }
    
    const handleDelete=()=>{  
        dispatch(getCart())    
        if(amount===1 && cart.length===1)  handleDeleteAllCart()
        dispatch(deleteOneCart(prodId))
        dispatch(update(true))//elimina va restando
    }

 

    return (
        <div className="DivAllCards">  
            <div className="contenedor_card">
                <Link className="LinkImage" to={`/detail/${name}`}>
                <div class="card_contenedor_img">
                    <img className="Imagen" src={image} width="20px" alt=""/>
                    <hr />
                </div>
                </Link>
                <p class="card_p_nombre">{name}</p>
                <strong class="card_strong_precio"> $ {price}</strong>
                <div className="ContainerSumRest">
                    <button className="Restar" onClick={handleDelete}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bag-dash" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                    </svg>
                    </button>
                    <p>{amount}</p> 
                    <button className="Sumar" onClick={handleAdd}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                    </svg>
                    </button>
                </div>
            </div>

        </div>
    );
}