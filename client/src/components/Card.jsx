import { Link } from "react-router-dom";
import "../styles/Card.css"
import AddToCart from "./AddToCart"

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
          <AddToCart name={name} image={image} price={price} />
        </div>

    </div>
  );
}
