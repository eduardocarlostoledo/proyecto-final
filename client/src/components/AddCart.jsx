import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.css';
import {addProductToCart } from '../redux/actions/ProductActions';

function AddToCart(item) {
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newItem = { name: item.name, image: item.image, price: item.price };
    addProductToCart(newItem)
    setMessage('Item added to cart!');
    // fetch('http://localhost:3001/cart', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(newItem)
    // })
    //   .then(response => response.json())
    //   .then(data => setMessage('Item added to cart!'));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Add to cart</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default AddToCart;
