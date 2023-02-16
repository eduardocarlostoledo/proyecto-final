import React, { useEffect } from "react";
import Json from "./Productos_PF.json";
import "../styles/Card.css";
import { useDispatch, useSelector} from "react-redux";
import { getProducts } from '../redux/slices/ProductSlice'

export default function Card() {
  const {listProductos: productos} = useSelector((state) => state.productos)
  const dispatch = useDispatch()
  
  
  useEffect(() => {
    dispatch(getProducts())
  },[dispatch])
  return (
    <div className="DivAllCards">
      {productos.map((prod, index) => (
        <div key={index} class="contenedor_card">
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
