import React, { useState, useEffect } from 'react';
import mercadopago from "./mercadopago";
import "../styles/Cart.css"

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  //const [preference, setPreference] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3001/cart')
      .then(response => response.json())
      .then(data => setCartItems(data))
      .catch(error => console.log(error));
  }, []);


  const total = cartItems.reduce((acc, item) => acc + (item.price * item.amount)  , 0);
  const description = cartItems.map(e=>e.name)
  const quantity = cartItems.reduce((acc, item) => acc + item.amount, 0);

  const orderData = {
    quantity: quantity,
    description: description.toString(),
    price: total
  };

  function handleCheckout(e) {
    e.preventDefault();    

    fetch("http://localhost:3001/pay/create_preference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),    
    })
    .then(function (response) {
        console.log("RESPONSE" , response)
        return response.json();
      })      
    // .then(function (response) {
       
    //   const data =response.json();
    //   setPreference(data)
    //   console.log("SET PREFERENCE" , preference)
    // })
    .then(
        function (preference) {
        createCheckoutButton(preference.id);
  
        // $(".shopping-cart").fadeOut(500);
        // setTimeout(() => {
        //   $(".container_payment").show(500).fadeIn();
        // }, 500);
      })
      .catch(function () {
        alert("Unexpected error");
        // $('#checkout-btn').attr("disabled", false);
      });
  }
  // Create preference when click on checkout button
  function createCheckoutButton(preferenceId) {
    // Initialize the checkout
    mercadopago.checkout({
      preference: {
        id: preferenceId
      },
      render: {
        container: '#button-checkout', // Class name where the payment button will be displayed
        label: 'Pay', // Change the payment button text (optional)
      }
    });
  }

  

  return (
    <div className='ContainerCart'>    
       <h2>Shopping Cart</h2>
       <nav className='NavCart'>
          <ul className='ListDesordenada'>
            {cartItems.map(item => (
              <li key={item.id}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
       </nav>
       
          <h3>Total: ${total}</h3>
          <button className='ButtonCart' onClick={handleCheckout}>Checkout</button>
       
       <div id="button-checkout"></div>
     </div>    
  );
}

export default Cart;





// Funciona pero necesito el componente preference
// import React, { useState, useEffect } from 'react';
// import styles from "../styles/Register.module.css";

// function Cart() {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3001/cart')
//       .then(response => response.json())
//       .then(data => setCartItems(data))
//       .catch(error => console.log(error));
//   }, []);

//   const total = cartItems.reduce((acc, item) => acc + (item.price * item.amount)  , 0);
// const description = cartItems.map(e=>e.name)
// console.log("DESCRIPTION ITEMS", description.toString());
// const quantity = cartItems.reduce((acc, item) => acc + item.amount, 0);
// console.log("QUANTITY", quantity)
// console.log("TOTAL", total)

// const orderData = {
    //     quantity: quantity,
    //     description: description.toString(),
    //     price: total
    //   };
    
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
        //     })
        
        
        //   }
        
        //   return (
//     <div>
//       <h1>.</h1>
//       <h1>.</h1>
//       <h1>.</h1>
//       <h1>.</h1>
//       <h1>.</h1>
//       <h1>.</h1>
//       <h2>Shopping Cart</h2>
//       <ul>
//         {cartItems.map(item => (
//           <li key={item.id}>
//             {item.name} - ${item.price}
//           </li>
//         ))}
//       </ul>
//       <p>Total: ${total}</p>
//       <button onClick={handleCheckout}>Checkout</button>
//     </div>
//   );
// }

// export default Cart;


// return (
    //     <div>
    //         <h1>.</h1>
    //         <h1>.</h1>
    //         <h1>.</h1>
    //       <h2>Shopping Cart</h2>
//       <ul>
//         {cartItems.map(item => (
    //           <li key={item.id}>
    //             {item.name} - ${item.price}
    //           </li>
    //         ))}
    //       </ul>
    //       <p>Total: ${total}</p>
    //       {preference ? (
        //         <CheckoutButton preference={preference} />
//       ) : (
    //         <button onClick={handleCheckout}>Checkout</button>
//       )}
//     </div>
//   );

//   function createCheckoutButton(preferenceId) {
//     //Initialize the checkout
//     mercadopago.checkout({
//       preference: {
//         id: preferenceId
//       },
//       render: {
//         container: '#button-checkout', // Class name where the payment button will be displayed
//         label: 'Pay', // Change the payment button text (optional)
//       }
//     });
//   }

//   return (
//         <div>
//           <h1>.</h1>
//           <h1>.</h1>
//           <h1>.</h1>
//           <h1>.</h1>
//           <h1>.</h1>
//           <h1>.</h1>
//           <h2>Shopping Cart</h2>
//           <ul>
//             {cartItems.map(item => (
//               <li key={item.id}>
//                 {item.name} - ${item.price}
//               </li>
//             ))}
//           </ul>
//           <p>Total: ${total}</p>
//           <button onClick={handleCheckout}>Checkout</button>
//         </div>
//       );
// }
      


// import React, { useEffect, useState } from 'react';
// import { useParams } from "react-router-dom";

// const FORM_ID = 'payment-form';

// export default function Product() {
//   const { id } = useParams(); // id de producto
//   const [preferenceId, setPreferenceId] = useState(null);

//   useEffect(() => {
//     // luego de montarse el componente, le pedimos al backend el preferenceId
//     axios.post('/api/orders', { productId: id }).then((order) => {
//       setPreferenceId(order.preferenceId);
//     });
//   }, [id]);

//   useEffect(() => {
//     if (preferenceId) {
//       // con el preferenceId en mano, inyectamos el script de mercadoPago
//       const script = document.createElement('script');
//       script.type = 'text/javascript';
//       script.src =
//         'https://www.mercadopago.cl/integrations/v1/web-payment-checkout.js';
//       script.setAttribute('data-preference-id', preferenceId);
//       const form = document.getElementById(FORM_ID);
//       form.appendChild(script);
//     }
//   }, [preferenceId]);

//   return (
//     <form id={FORM_ID} method="GET" />
//   );
// }