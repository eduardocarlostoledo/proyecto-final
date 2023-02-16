import axios from 'axios';
import {getAllProducts, getProductsById, postProduct, getTypeProducts, getTrademarkProducts} from '../slices/ProductSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';



export const getProducts = () => (dispatch) => {
    axios('http://localhost:3001/products')
    .then((r) => dispatch(getAllProducts(r.data.data)))
    .catch((e) => console.log(e))
}

export const getProdById = (name) => (dispatch) => {
    axios(`http://localhost:3001/products/params/${name}`)
    .then((r) => dispatch(getProductsById(r.data)))
    .catch((e) => console.log(e))
}
export const postProd = () => (dispatch) => {
    axios('http://localhost:3001/products')
    .then((r) => dispatch(postProduct(r.data)))
    .catch((e) => console.log(e))
}

export const getTypeProduct = () => (dispatch) => {
    axios('http://localhost:3001/typeproducts')
    .then((r) => dispatch(getTypeProducts(r.data)))
    .catch((e) => console.log(e))
}
export const getTrademarkProduct = () => (dispatch) => {
    axios('http://localhost:3001/typeproducts')
    .then((r) => dispatch(getTrademarkProducts(r.data)))
    .catch((e) => console.log(e))
}