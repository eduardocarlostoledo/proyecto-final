import React, { useState } from 'react';
import '../styles/Card.css';
import swal from 'sweetalert';

function AddToCart(item) {
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const newItem = { name: item.name, image: item.image, price: item.price };
        fetch('http://localhost:3001/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem)
        })
        .then(response => response.json())
        .then(data => swal('Success', "Cart Added!", 'success'));
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <button className='ButtonCart' type="submit">Add to cart</button>
            {message && <p className='ButtonMessage'>{message}</p>}
        </form>
        </div>
    );
}

export default AddToCart;