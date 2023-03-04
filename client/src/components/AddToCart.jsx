import React, {useState } from 'react';
import '../styles/Card.css';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import { update } from '../redux/actions/CartActions';
import { useSelector } from 'react-redux';
import { UserActive } from '../redux/actions/UsersActions';

export default function AddToCart (item){

    const [message, setMessage] = useState('');
    const dispatch =  useDispatch()

    const userActiveOwnerOfCart = useSelector(state => state.UserActive);    

    const handleSubmit = e => {
        e.preventDefault();
        const newItem = { name: item.name, image: item.image, price: item.price, cartUserId: userActiveOwnerOfCart.id };
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
        .then(data => swal('Success', "Cart Added!", 'success'));
        dispatch(update(true))
    };
    


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button className='ButtonCart' type="submit">Add to Cart</button>
                {message && <p className='ButtonMessage'>{message}</p>}
            </form>
        </div>
    );
}
