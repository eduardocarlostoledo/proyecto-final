import { Link } from "react-router-dom";
import { addToCart } from "../redux/actions/CartActions";
import "../styles/Card.css"

export default function Card({name, image, price}) {
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
          <button onClick={addToCart({name,image,price})}>add</button>
        </div>

    </div>
  );
}

