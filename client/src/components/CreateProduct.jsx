import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getAllBrands, getAllTypes } from "../redux/actions/ProductActions";

import "../styles/CreateProduct.css";

const validate = (product) => {
    
    let error = {};
  
    if(!/[A-Za-z0-9]/.test(product.name)){
        error.name = 'El nombre del producto solo admite letras, numeros y espacios'     
    }if(!product.name){
        error.name = 'Debe ingresar un nombre de producto' 
    }
    if (!product.image) { error.image = "La imagen es obligatoria"; }
  
    if (!product.price > 0 || isNaN(Number(product.price))) {
        error.price = "El precio debe ser un número"; //ver para que sea mayor a 0
    }
  
    if (!product.description) {
        error.description = "La descripción es obligatoria";
    }
  
    if (product.brand.length === 0) {
        error.brand = "Debes seleccionar al menos una marca";
    }
  
    if (product.type.length === 0) {
        error.type = "Debes seleccionar al menos un tipo";
    }
  
    return error;
    
}

export default function CreateProduct() {

    const dispatch = useDispatch();
    const brands = useSelector((state) => state.brands)
    const types = useSelector((state) => state.types)

    useEffect(() => {
        dispatch(getAllBrands())
        dispatch(getAllTypes())
    },[dispatch])


    const [error, setError] = useState({
        name: "",
        image: "",
        price: "",
        description: "",
        brand: [],
        type: [],
    })

    const [product, setProduct] = useState({
        name: "",
        image: "",
        price: "",
        description: "",
        brand: [],
        type: [],
    });

    

    
    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value,});
        console.log(product)
        setError(validate({...product, [e.target.name]: e.target.value,}))
    };

    const handleSelectBrands = (e) => {
        setError(validate({ ...product, brand: [...product.brand, e.target.value]})) 
        setProduct({ ...product, brand: [...product.brand, e.target.value]})
        console.log(product) 
    }
    const handleSelectTypes = (e) => {
        setError(validate({ ...product, type: [...product.type, e.target.value]})) 
        setProduct({ ...product, type: [...product.type, e.target.value]})
        console.log(product) 
    }
    
    const handleSubmit = (e) => {
        if(!product.name && !product.image && !product.price && !product.description && !product.brand.length && !product.type.length){
            alert('No se puede crear')
        } else {

            e.preventDefault();
            console.log(product)
            setError(validate({...product, [e.target.name] : e.target.value}))
            dispatch(CreateProduct(product));
            
            alert('Producto creado')

            setProduct({
                name: "",
                image: "",
                price: "",
                description: "",
                brand: [],
                type: [],
            })
            //history.push('/Home')
        }
       
    };

    return (
        <div className="FormDiv">
        <h1>Form</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Name</label>
                    <input type='text' name="name" placeholder="Coloque un name" value={product.name} onChange={(e) => handleChange(e)}></input>                            
                    {error.name && (<p>{error.name}</p>)}
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" name="price" placeholder="Coloque un price" value={product.price} onChange={(e) => handleChange(e)}/>
                    {error.price && (<p>{error.price}</p>)}
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" name="description" placeholder="Coloque una description" value={product.description} onChange={(e) => handleChange(e)}/>
                    {error.description && (<p>{error.description}</p>)}
                </div>
                <div>
                    <label>Image</label>
                    <input type="url://" name="image" placeholder="Coloque una image" value={product.image} onChange={handleChange}/>
                    {error.image && (<p>{error.image}</p>)}
                </div>
                {/* <label>
                Brand:
                <input type="text" name="brand" placeholder="..." value={product.brand} onChange={handleChange}/>
                </label>
                <label>
                Type:
                <input type="text" name="type" placeholder="..." value={product.type} onChange={handleChange} />
                </label> */}
                <div>
                    <label>Brands</label>
                    <select name="brand" onChange={(e) => handleSelectBrands(e)}>
                        <option value="brand">All</option>
                        {brands.map((b, index) => (
                            <option key={index} value={b.id}>{b.name}</option>
                        ))}
                    </select>
                    {error.brand && (<p>{error.brand}</p>)}
                </div>
                <div>
                    <label>Types</label>
                    <select name="type" onChange={(e) => handleSelectTypes(e)}>
                        <option value="type">All</option>
                        {types.map((t, index) => (
                            <option key={index} value={t.id}>{t.name}</option>
                        ))}
                    </select>
                    {error.type && (<p>{error.type}</p>)}
                </div>
                <button type="submit">Create Product</button>
            </form>
        </div>
    );
}