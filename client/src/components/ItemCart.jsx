import "../styles/Card.css"
import { Link } from "react-router-dom";
import { addToCart, deleteProductToCart } from "../redux/actions/CartActions";

export default function ItemCart({name, image, price, prodId,amount}) {
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
          <button onClick={deleteProductToCart(prodId)}>-</button>
          <p>{amount}</p>
          <button onClick={addToCart({name,image,price})}>+</button>
        </div>

    </div>
  );
}
