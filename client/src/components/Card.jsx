import React from "react";
import '../styles/Card.css'

export default function Card ({name,price,image}) {
    
    return(
            <div class="contenedor_card">
                <div class="card_contenedor_img">
                    <h1>{name}</h1>
                    <img src={image} alt=""/>
                </div>
                <p class="card_p_nombre">descripcion corta Lorem ipsum dolor sit amet consectetur adint recusand</p>
                <strong class="card_strong_precio">${price}</strong>
                <div class="card_contenedor_buttons">
                    <button class="card_button_sumar">+</button>
                    <p class="card_p_cantidad">1</p>
                    <button class="card_button_restar">-</button>
                </div>
                <button class="card_button_comprar">comprar</button>
            </div>
    )
}