import "../styles/Card.css"
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { addToCart, deleteProductFromCart,getCart } from "../redux/actions/CartActions";

export default function ItemCart({name, image, price, amount,prodId}) {
  const dispatch=useDispatch();

  const handleAdd=()=>{
    dispatch(addToCart({name, image,  price}))
  }
  
  const handleDelete=()=>{
    dispatch(deleteProductFromCart(prodId))
  }

  return (
    <div className="DivAllCards">  
        <div className="contenedor_card">
          <Link className="LinkImage" to={`/detail/${name}`}>
          <div class="card_contenedor_img">
            <img className="Imagen" src={image} width="100px" alt=""/>
            <hr />
          </div>
          </Link>
          <p class="card_p_nombre">{name}</p>
          <strong class="card_strong_precio"> $ {price}</strong>
          <button onClick={handleDelete}>-</button>
          <p>{amount}</p>
          <button onClick={handleAdd}>+</button>
        </div>

    </div>
  );
}
