import "../styles/Card.css"
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { addToCart, deleteOneCart ,update} from "../redux/actions/CartActions";

export default function ItemCart({name, image, price, amount,prodId}) {

    const dispatch=useDispatch();

    const handleAdd=()=>{
        dispatch(addToCart({name, image,  price}))
        dispatch(update(true)) //2 a 3
    }
    
    const handleDelete=()=>{
        dispatch(deleteOneCart(prodId))
        dispatch(update(true)) //elimina va restando
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