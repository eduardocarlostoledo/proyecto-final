import React, {useState } from 'react';
import '../styles/Card.css';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
<<<<<<< Updated upstream
//import { update } from '../redux/actions/CartActions';
=======
import { update } from '../redux/actions/CartActions';
>>>>>>> Stashed changes
import { useSelector } from 'react-redux';
import { UserActive } from '../redux/actions/UsersActions';

export default function AddToCart (item){
    const [message, setMessage] = useState('');
    const dispatch =  useDispatch()    

    const userActiveOwnerOfCart = useSelector(state => state.UserActive);
    

    const userActiveOwnerOfCart = useSelector(state => state.UserActive.id);
    

    const handleSubmit = e => {
<<<<<<< Updated upstream
        e.preventDefault();        
        console.log("USERACTIVE.DATA.ID", userActiveOwnerOfCart.id)
=======
        e.preventDefault();
>>>>>>> Stashed changes
        const newItem = { 
            name: item.name, 
            image: item.image, 
            price: item.price, 
<<<<<<< Updated upstream
            userId: userActiveOwnerOfCart.id, 
             };
            
=======
            cartUserId: userActiveOwnerOfCart };

        console.log("NEW ITEM ADDTOCART USERID:", newItem.cartUserId)
>>>>>>> Stashed changes
        fetch('http://localhost:3001/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
        .then(response => response.json())
        .then(data => swal('Success', "Cart Added!", 'success'));
        //dispatch(update(true))
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button className='ButtonCart' type="submit">Add to Cart</button>
                {message && <p className='ButtonMessage'>{message}</p>}
            </form>
    
        <div>
            <h1>Usuario activo</h1>            
            <p>ID: {userActiveOwnerOfCart.id}</p>
            <p>Nombre: {userActiveOwnerOfCart.name}</p>
            <p>Correo electrónico: {userActiveOwnerOfCart.email}</p>
            </div>
        </div>
    );
}