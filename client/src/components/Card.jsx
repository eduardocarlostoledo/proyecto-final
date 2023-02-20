
import { Link } from "react-router-dom";
import "../styles/Card.css"

export default function Card({name, image, price}) {
    return (
        // <div class="CardsContainer">
        //     <div class="ContainerImage">
        //         <img src={image} alt=""/>
        //     </div>
        //     <div className="Precio">
        //         <h1 className="NameProduct"><b>{name}</b></h1>
        //         <p><hr /></p>
        //         <strong>${price}</strong>
        //     </div>
        //     <div className="ContainerButtons">
        //         <div class="CardButtons">
        //             <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
        //                 <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        //                 <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        //                 </svg>
        //             </button>
        //             <p class="Cantidad">1</p>
        //             <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
        //                 <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        //                 <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
        //                 </svg>
        //             </button>
        //         </div>
        //         <button class="ButtonComprar">comprar</button>
        //     </div>
        // </div>
        <div className="DivAllCards">
      
        <div class="contenedor_card">
          <Link to={`/detail/${name}`}>
          <div class="card_contenedor_img">
            <img src={image} alt="" />
          </div>
          </Link>
          <p class="card_p_nombre">{name}</p>
          
          <strong class="card_strong_precio"> $ {price}</strong>
          {/* <div class="card_contenedor_buttons"> */}
            {/* <button class="card_button_sumar">+</button>
            <p class="card_p_cantidad">1</p> */}
            {/* <button class="card_button_restar">-</button> */}
          {/* </div>*/}
          <button class="card_button_comprar">Add cart</button> 
        </div>

    </div>
  );
}

