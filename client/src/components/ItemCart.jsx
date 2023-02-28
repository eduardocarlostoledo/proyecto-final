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
                    <button className="Restar" onClick={handleDelete}><i class="bi bi-bag-dash"></i></button>
                    <p>{amount}</p> 
                    <button className="Sumar" onClick={handleAdd}><i class="bi bi-bag-plus"></i></button>
                </div>
            </div>

        </div>
    );
}