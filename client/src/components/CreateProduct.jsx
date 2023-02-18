import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrands, getAllTypes } from "../redux/actions/ProductActions";
// import { createProduct } from "../redux/actions/ProductActions";
// import JsonMarcas from "./Marcas.json";
// import JsonTypes from "./Componentes.json";

import "../styles/CreateProduct.css";

export default function CreateProduct() {

  const brands = useSelector((state) => state.brands)
  const type = useSelector((state) => state.types)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrands())
    dispatch(getAllTypes())
  },[dispatch])

  const [product, setProduct] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
    brand: [],
    type: [],
  });
  const [errores, setErrores] = useState({});


  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    console.log("tipo", name, "id", value);
    console.log(product.brand);
    const errores = validarFormulario(product);
    setErrores(errores);
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]:
        type === "checkbox"
          ? checked
            ? [...prevProduct[name], value]
            : prevProduct[name].filter((item) => item !== value)
          : value,
    }));
  }

  function handleChangeCheck(event) {
    event.preventDefault();
    const {id,Check} = event.target;
    console.log(event.target);
    if (!product.brand.includes(id)) return setProduct({...product,"brand":[...product.brand,id]});
    console.log(product);
    setProduct({
      ...product,
      "brand": !product.brand.filter((element) => element !== id)
    })

  }

  const handleSelect = (e) => {
    setErrores(validarFormulario({...product, type: [...product.type, e.target.value]}))
    setProduct({...product, type: [...product.type, e.target.value]})
    console.log(product)
    
}
const handleSelectBrand = (e) => {
  setErrores(validarFormulario({...product, brand: [...product.type, e.target.value]}))
    setProduct({ ...product, brand: [...product.brand, e.target.value]})
    console.log(product)
     
}

  function handleSubmit(event) {
    event.preventDefault();
    const errores = validarFormulario(product);
    setErrores(errores);
    console.log(product);
    console.log(errores);
    if (Object.keys(errores).length === 0) {
      console.log("Datos del formulario:", product);
    }
  }

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

          <div className="SelectsDiv">
            Brand:
            <select
              name="brand"
              multiple
              value={product.brand}
              onChange={(e) => handleSelectBrand(e)}
            >
              <option value="" disabled selected>
                Select a brand product
              </option>
              {brands.map((marca, index) => (
                <option key={index} value={marca.id}>{marca.name}</option>
              ))}
            </select>
            {/* {countries.map((c, index)=>(
                                    <option key={index} value={c.id}>{c.name}</option>  //ordenar por orden alfabetico
                                ))} */}
            <label>
              Type:
              <select
                name="type"
                multiple
                value={product.brand}
                onChange={(e) => handleSelect(e)}
              >
                <option value="" disabled selected>
                  Select a hardware product
                </option>
                {type.map((type, index) => (
                  <option key={index} value={type.id}>{type.name}</option>
                ))}
              </select>
            </label>

          </div>
          <button type="submit"> Agree </button>
        </form>
      </div>
    </div>
  );
}
