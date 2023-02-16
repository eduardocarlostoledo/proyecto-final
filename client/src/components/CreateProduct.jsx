import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postProd  } from "../../src/redux/ProductActions";
import '../styles/CreateProduct.css';

export default function CreateProduct() {
  const [product, setProduct] = useState({
    name: '',
    image: '',
    price: '',
    description: '',
    brand: '',
    type: '',    
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setProduct({ 
      ...product, 
      [e.target.name]: e.target.value });
  }  

   
  //falta validar si existe
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postProd(product));
  };
 
return (
  
    <div className="FormDiv">
        <h1>Form</h1>
      <form onSubmit={handleSubmit}>
      <label>
        Product:
        <input
          type="text"
          name="name"
          placeholder="..."
          value={product.name}
          onChange={handleChange}
        />
      </label>
      <label >
        Price:
        <input
          type="text"
          name="price"
          placeholder="..."
          value={product.price}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          placeholder="..."
          value={product.description}
          onChange={handleChange}
        />
      </label>
      
      <label>
        Brand:
        <input
          type="text"
          name="brand"
          placeholder="..."
          value={product.brand}
          onChange={handleChange}
        />
      </label>
      <label>
        Type:
        <input
          type="text"
          name="type"
          placeholder="..."
          value={product.type}
          onChange={handleChange}
        />
      </label>
      
      <button type="submit"> Agree </button>
    </form>
    </div>
  );
};

