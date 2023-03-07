import React, {useState } from 'react';
import '../styles/Card.css';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import { update } from '../redux/actions/CartActions';
import { AiOutlineShoppingCart } from 'react-icons/ai';


export default function AddToCart (item){

    const [message, setMessage] = useState('');
    const dispatch =  useDispatch()
  
    const userActiveOwnerOfCart = localStorage.getItem("USUARIO")!==null
              ?JSON.parse(localStorage.getItem("USUARIO"))
              :null

    const handleSubmit = e => {
        e.preventDefault();
  
        if(userActiveOwnerOfCart===null)swal('Oops...', "You must log in to add products to cart!", 'info')
        else {
            const newItem = { name: item.name, image: item.image, price: item.price, cartUserId: userActiveOwnerOfCart.email };
            console.log("NEW USER ITEM" , userActiveOwnerOfCart)
            console.log("NEW ITEM" , newItem)
            fetch('http://localhost:3001/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
            })
            .then(response => response.json())
            .then(data => swal('Success', "Cart Added!", 'success'))
            dispatch(update(true))
        }
        
    };
    


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button className="ButtonC" type="submit"> <AiOutlineShoppingCart className="Cart" /></button>
                {message && <p className='ButtonMessage'>{message}</p>}
            </form>
        </div>
    );
}
