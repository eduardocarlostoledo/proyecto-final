import React, { useState, useEffect } from 'react';
import mercadopago from "./mercadopago";
import "../styles/Cart.css"

export default function Cart() {

    const [cartItems, setCartItems] = useState([]);
   
    useEffect(() => {
        fetch('http://localhost:3001/cart')
        .then(response => response.json())
        .then(data => setCartItems(data))
        .catch(error => console.log(error));
    }, []);

    
    const price = cartItems.reduce((acc, item) => acc + (item.price * item.amount)  , 0)
    const total = price.toFixed(1)
    const description = cartItems.map(e=>e.name)
    const quantity = cartItems.reduce((acc, item) => acc + item.amount, 0);

    const orderData = {
        quantity: 1,
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
        
        .then(
            function (preference) {
            createCheckoutButton(preference.id);
        })
        .catch(function () {
            alert("Unexpected error");
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

    function deleteCart(prodId) {
        fetch(`http://localhost:3001/cart/${prodId}`, {
        method: 'DELETE'
        })
        .then(response => {
        if (!response.ok) {
            throw new Error('Error al eliminar el carrito');
        }
        // Actualizar la interfaz de usuario para reflejar que el carrito ha sido eliminado
        })
        .catch(error => console.error(error));
    }

    return (
        <div className='ContainerCart'>    
        <h2>Shopping Cart</h2>
            
        <nav className='NavCart'>
            <ul className='ListDesordenada'>
                {cartItems.map(item => (
                <li key={item.id}>
                    {item.name} - ${item.price} - {item?.amount}
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





