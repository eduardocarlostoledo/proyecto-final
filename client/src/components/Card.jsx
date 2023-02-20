
import "../styles/Card.css"

export default function Card({name, image, price}) {
    return (
        <div className="DivAllCards">
      
        <div class="contenedor_card">
          <div class="card_contenedor_img">
            <img src={image} width="100px" alt=""/>
            <hr />
          </div>
          <p class="card_p_nombre">{name}</p>
          
          <strong class="card_strong_precio"> $ {price}</strong>
          <div class="card_contenedor_buttons">
            <button class="card_button_sumar">+</button>
            <p class="card_p_cantidad">1</p>
            <button class="card_button_restar">-</button>
          </div>
          <button class="card_button_comprar">comprar</button>
        </div>

    </div>
  );
}

