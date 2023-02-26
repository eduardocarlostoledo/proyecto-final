import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/CreateProduct.css";
import swal from 'sweetalert';

import {
  getAllBrands,
  getAllTypes,
  createProduct,
} from "../redux/actions/ProductActions";

function validate(input) {
    let errors = {};
    const regexName = /^[A-Za-z0-9\s]+$/g;
    const regexDesc = /^[A-Za-z0-9\s]+$/g;

    if (input.name && !regexName.test(input.name)) {
        errors.name = "can't include special characters or numbers";
    }
    if (!input.name) {
        errors.name = "Name is required";
    }
    if (input.name.length > 35) {
        errors.name = "Max 35 caracteres";
    }
    if (input.name.length < 6) {
        errors.name = "Min 6 caracteres";
    }
    if (input.description && !regexDesc.test(input.description)) {
        errors.description = "can't include special characters";
    }
    if (!input.description) {
        errors.description = "lastname is required";
    }
    if (input.description.length > 45) {
        errors.description = "Max 45 caracteres";
    }
    if (input.description.length < 10) {
        errors.description = "Min 10 caracteres";
    }
    if(!input.image){
        errors.image = 'Image not placed'
    }
    if (!input.price) {
        errors.price = "price is required";
    }
    if(!input.type.length){
        errors.type = 'Place the name of a type and select the same'    
    }
    if(!input.brand.length){
        errors.brand = 'Place the name of a brand and select the same'    
    }
    return errors;
}

export const CreateProducts = () => {

    const dispatch = useDispatch();
    const brands = useSelector((state) => state.brands);
    const types = useSelector((state) => state.types);

    useEffect(() => {
        dispatch(getAllBrands());
        dispatch(getAllTypes());
    }, [dispatch]);

    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        name: "",
        image: "",
        price: "",
        description: "",
        brand: [],
        type: [],
    });

    const handleChange = (e) => {
        
        setErrors( validate({ ...input, [e.target.name]: e.target.value}));
        setInput({...input, [e.target.name]: e.target.value});
        console.log(input)
    }

    
    const handleSubmit = (e) => {

        if(!input.name || !input.image || !input.price || !input.description || !input.type.length || !input.brand.length) {
            return swal('Hello', 'Cannot create product', 'error')
        } else {
            e.preventDefault();
            console.log(input)
            setErrors(validate({...input, [e.target.name] : e.target.value}))
            dispatch(createProduct(input));
            swal('hello', "Created product", 'success');
            setInput({
                name: "",
                image: "",
                price: "",
                description: "",
                brand: [],
                type: [],
            });
        }
    }

    const [typeInput, setTypeInput] = useState('');
    const [brandInput, setBrandInput] = useState('');


    return (
        <div className="container">
                    
            <div className='containerForm'>
            <h1 className='title'>Create Product</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='name'>
                        <label className='nameLabel'>Name Product</label>
                        <input className='input' type='text' value={input.name} name='name' placeholder="Name Product" onChange={(e) => handleChange(e)}></input>                   
                        {errors.name && (<p className='spanError'>{errors.name}</p>)}
                    </div>


                    <div className='name'>
                        <label className='nameLabel'>Image</label>
                        <input className='input' type='text' value={input.image} name= 'image' placeholder="Image Product" onChange={(e) => handleChange(e)}></input>                   
                        {errors.image && (<p className='spanError'>{errors.image}</p>)}
                    </div>


                    <div className='name'>
                        <label className='nameLabel'>Price</label>
                        <input className='input' type='text' value={input.price} name = 'price' placeholder="Price" onChange={(e) => handleChange(e)}></input>                  
                        {errors.price && (<p className='spanError'>{errors.price}</p>)}
                    </div>
                    <div className='name'>
                        <label className='nameLabel'>Description</label>
                        <input className='input' type='text' value={input.description} name= 'description' placeholder="Description" onChange={(e) => handleChange(e)}></input>                 
                        {errors.description && (<p className='spanError'>{errors.description}</p>)}
                    </div>
                    <div>
                        <div className='name'>
                            <label className='nameLabelMap'>New Type</label>
                            <div className="ContainerTypeBrand">
                                <input className='inputNew' type='text' value={typeInput} name='type' placeholder="Name Type" onChange={(e) => setTypeInput(e.target.value)}></input> 
                                <select className='selectName' name='type' placeholder="Select Type" onChange={e=>handleChange(e)}>
                                    <option value="" disabled selected>Select Type</option>
                                    {types && types.map((type, index) => (
                                        <option key={index} value={type.name}>{type.name}</option>
                                    ))}
                                    {typeInput && <option value={typeInput}>{typeInput}</option>}
                                </select>
                                {errors.type && (<p className='spanSError'>{errors.type}</p>)}
                            </div>
                        </div>
                        <div className='name'>
                            <label className='nameLabelMap'>New Brand</label>
                            <div className="ContainerTypeBrand">
                                <input className='inputNew' type='text' value={brandInput} name='brand' placeholder="Name Brand" onChange={(e) => setBrandInput(e.target.value)}></input> 
                                <select className='selectName' name='brand' placeholder="Select Brand" onChange={e=>handleChange(e)}>
                                    <option value="" disabled selected>Select Brand</option>
                                    {brands && brands.map((brand, index) => (
                                        <option key={index} value={brand.name}>{brand.name}</option>
                                    ))}
                                    {brandInput && <option value={brandInput}>{brandInput}</option>}
                                </select>
                                {errors.brand && (<p className='spanSError'>{errors.brand}</p>)}
                            </div>
                        </div>
                    </div>
                    <button className='buttonCrear' type="submit">Create Product</button>                          
                </form>
            </div>                  
        </div>
    );
};
