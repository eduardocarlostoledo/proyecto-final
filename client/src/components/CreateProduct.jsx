import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../src/redux/ProductActions";
import "../styles/CreateProduct.css";

export default function CreateProduct() {
  const [product, setProduct] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
    brand: [],
    type: [],
  });
  const [errores, setErrores] = useState({});

  const dispatch = useDispatch();

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    console.log("checked", checked, "type", type);
    console.log(name, value, type, checked);
    console.log(product.brand);
    const errores = validarFormulario(product);
    setErrores(errores);
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: type === "checkbox" ? 
        (checked ? [...prevProduct[name], value] : prevProduct[name].filter(item => item !== value)) 
        : value
    }));
  }

  //falta validar si existe
  function handleSubmit(event) {
    event.preventDefault();
    const errores = validarFormulario(product);
    setErrores(errores);
    console.log(product);
    console.log(errores);
    if (Object.keys(errores).length === 0) {
      // Aquí puedes hacer algo con los datos del formulario
      console.log("Datos del formulario:", product);
    }
  };

  function validarFormulario({ name, image, price, description, brand, type }) {
    const errores = {};
  
    if (!name.trim()) {
      errores.name = "El nombre es obligatorio";
    }
  
    if (!image.trim()) {
      errores.image = "La imagen es obligatoria";
    }
  
    if (!price.trim() || isNaN(Number(price))) {
      errores.price = "El precio debe ser un número";
    }
  
    if (!description.trim()) {
      errores.description = "La descripción es obligatoria";
    }
  
    if (!Array.isArray(brand) || !brand.length) {
      errores.brand = "Debes seleccionar al menos una marca";
    }
  
    if (!Array.isArray(type) || !type.length) {
      errores.type = "Debes seleccionar al menos un tipo";
    }
  
    return errores;
  }
  

  return (
    <div className="FormDiv">
      <h1>Form</h1>
      <div>
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
            {errores.name && <p>{errores.name}</p>}
          </label>
          <label>
            Image:
            <input
              type="text"
              name="image"
              placeholder="..."
              value={product.image}
              onChange={handleChange}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
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

          {/* <label>
          Brand:
          <input
            type="text"
            name="brand"
            placeholder="..."
            value={product.brand}
            onChange={handleChange}
          /> */}
          <div className="SelectsDiv">
            <label>
              Brand:
              <select name="brand" multiple value={product.brand} onChange={handleChange}>
                <option>Intel
                  <input
              type="checkbox"
              name="type"
              value="tipo2"
              checked={product.brand.includes("tipo2")}
              onChange={handleChange}
            />
            </option>
                <option>Amd
                <input
              type="checkbox"
              name="type"
              value="tipo2"
              checked={product.brand.includes("tipo2")}
              onChange={handleChange}
            />
                </option>
                <option>Envidia</option>
              </select>
            </label>
            {/* </label>
        <label>
          Type:
          <input
            type="text"
            name="type"
            placeholder="..."
            value={product.type}
            onChange={handleChange}
          />
        </label> */}
            <label>
              Type:
              <select name="type" onChange={handleChange}>
                <option value="" disabled selected>
                  Select a hardware product
                </option>
                <option value="processor">Processor</option>
                <option value="motherboard">Motherboard</option>
                <option value="graphics-card">Graphics card</option>
                <option value="hard-drive">Hard drive</option>
                <option value="ram-memory">RAM memory</option>
                <option value="power-supply">Power supply</option>
                <option value="case">Case</option>
                <option value="cooling-system">Cooling system</option>
                <option value="keyboard">Keyboard</option>
                <option value="mouse">Mouse</option>
              </select>
            </label>
          </div>
          <button type="submit"> Agree </button>
        </form>
      </div>
    </div>
  );
}
