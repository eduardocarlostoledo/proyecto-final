import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import ItemCart from "./ItemCart";
import { getCart,deleteCart,getStateCart } from '../redux/actions/CartActions';
import mercadopago from "./mercadopago";
import "../styles/Cart.css"

export default function Cart() {
    const cart=useSelector(state=>state.cart)
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(getCart())
    }, [cart]);
    
    const totalPrice =cart.reduce((acc, item) => acc + (item.amount*item.price), 0);
    const description = cart.map(e=>e.name)
    const quantity = cart.reduce((acc, item) => acc + item.amount, 0);

    const orderData = {
        quantity: quantity,
        description: description.toString(),
        price: totalPrice
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
    

    return (
        <div className='ContainerCart'>    
            <h2>Shopping Cart</h2>
            {cart?.map(item => (
                <ItemCart 
                    key={item.id}
                    name={item.name}
                    price={item.price} 
                    image={item.image} 
                    prodId={item.prodId}
                    amount={item.amount}/>
            ))}
        
        <h3>Total: ${totalPrice}</h3>
        <button className='ButtonCart' onClick={handleCheckout}>Checkout</button>
        
        <div id="button-checkout"></div>
        </div>    
    );
}