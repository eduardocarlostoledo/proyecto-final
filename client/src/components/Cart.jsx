import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductsCart } from '../redux/actions/ProductActions';
import styles from "../styles/Register.module.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    setCartItems(getProductsCart())
    // fetch('http://localhost:3001/cart')
    //   .then(response => response.json())
    //   .then(data => setCartItems(data))
    //   .catch(error => console.log(error));
  }, []);

  const total = cartItems.reduce((acc, item) => acc + (item.price * item.amount)  , 0);
  const description = cartItems.map(e=>e.name)
  console.log("DESCRIPTION ITEMS", description.toString());
  const quantity = cartItems.reduce((acc, item) => acc + item.amount, 0);
  console.log("QUANTITY", quantity)
  console.log("TOTAL", total)

const orderData = {
    quantity: quantity,
    description: description.toString(),
    price: total
  };

// function handleCheckout(e) {
//     e.preventDefault();    

//     fetch("http://localhost:8080/create_preference", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(orderData),    
//   })
//   .then(function (response) {
//     console.log("RESPONSE" , response)
//     return response.json();
    // })
    //   .then(function (preference) {
    //   createCheckoutButton(preference.id);

    //   $(".shopping-cart").fadeOut(500);
    //   setTimeout(() => {
    //     $(".container_payment").show(500).fadeIn();
    //   }, 500);
    // })
    // .catch(function () {
    //   alert("Unexpected error");
    //   $('#checkout-btn').attr("disabled", false);
    // });    
    
    // clearCart();
    // updateUI();
  //}

  return (
    <div>
      <h1>.</h1>
      <h1>.</h1>
      <h1>.</h1>
      <h1>.</h1>
      <h1>.</h1>
      <h1>.</h1>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      {/* <button onClick={handleCheckout}>Checkout</button> */}
    </div>
  );
}

export default Cart;
