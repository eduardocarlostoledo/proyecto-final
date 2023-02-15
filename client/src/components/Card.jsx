import React from "react";
import Json from "./Productos_PF.json";
import "../styles/Card.css";

export default function Card() {
  return (
    <div className="DivAllCards">
      {Json.map((prod) => (
        <div class="contenedor_card">
          <div class="card_contenedor_img">
            <img src={prod.image} alt="" />
          </div>
          <p class="card_p_nombre">
            {prod.name}
          </p>
          <strong class="card_strong_precio"> $ {prod.price}</strong>
          <div class="card_contenedor_buttons">
            <button class="card_button_sumar">+</button>
            <p class="card_p_cantidad">1</p>
            <button class="card_button_restar">-</button>
          </div>
          <button class="card_button_comprar">comprar</button>
        </div>
      ))}
    </div>
  );
}
// <div class="contenedor_card">
//     <div class="card_contenedor_img">
//         <img src="https://www.adslzone.net/app/uploads-adslzone.net/2016/07/Intel.jpg" alt=""/>
//     </div>
//     <p class="card_p_nombre">descripcion corta Lorem ipsum dolor sit amet consectetur adint recusand</p>
//     <strong class="card_strong_precio"> $1.200</strong>
//     <div class="card_contenedor_buttons">
//         <button class="card_button_sumar">+</button>
//         <p class="card_p_cantidad">1</p>
//         <button class="card_button_restar">-</button>
//     </div>
//     <button class="card_button_comprar">comprar</button>
// </div>
