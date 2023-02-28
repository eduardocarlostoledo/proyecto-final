import React, { useState, useEffect} from 'react';
import mercadopago from "./mercadopago";
import "../styles/Cart.css"
import { useDispatch } from 'react-redux';
import { deleteAllFromCart} from '../redux/actions/CartActions';
import swal from 'sweetalert';
import ItemCart from './ItemCart';

export default function Cart() {

    const dispatch = useDispatch();
    
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/cart')
        .then(response => response.json())
        .then(data => setCartItems([...data]))
        .catch(error => swal('Carrito Vacio', "Carrito Vacio", 'error'));
        
    }, [cartItems]);

    const price = cartItems.reduce((acc, item) => acc + (item.price * item.amount)  , 0)
    const total = price.toFixed(1)

    const description = cartItems.map(e=>e.name)
    const quantity = cartItems.reduce((acc, item) => acc + item.amount, 0);




    const orderData = {
        quantity: 1,
        description: description.toString(),
        price: total
    };

    const handleCheckout = (e) =>{
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
    const createCheckoutButton = (preferenceId) => {
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

    
    const handleDeleteAllCart = () => {
        dispatch(deleteAllFromCart())
    }



    return (
        <div className='ContainerCart'>
            <h2 className='h2'>Shopping Cart</h2>
            
            <div className='NavCart'>
                    {cartItems.length == 0 ? (
                        <p>el carrito esta vacio</p>

                    ) : ( cartItems.map(item => (
                        <div >
                            {/* <li key={item.id}>
                        {item.name} - ${item.price} - {item?.amount}
                        <button onClick={() => handleDeleteOne(item.prodId)}>X</button>
                    </li> */}
                            <ItemCart
                                name= {item.name}
                                price= {item.price}
                                amount= {item?.amount}
                                image= {item.image}
                                prodId= {item.prodId}
                                key={item.id}
                            />
                            
                        </div>

                        ))
                    )}

        
            </div>
            <button className='ButtonDeleteAll' onClick={handleDeleteAllCart}>Delete All Cart</button>

            <h3 className='h3'>Total: ${total}</h3>
            <div className='BotonCheckout'>
                <button className='ButtonCart' onClick={handleCheckout}>Checkout</button>
                <div  id="button-checkout"></div>
            </div>
        </div>
    );
}

