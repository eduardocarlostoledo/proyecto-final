import axios from 'axios';

import {getAllProducts, getProductsById, postProduct, getTypeProducts, getTrademarkProducts} from './ProductSlice';

export const getProducts = () => (dispatch) => {
    axios('http://localhost:3001/products')
    .then((r) => dispatch(getAllProducts(r.data.results)))
    .catch((e) => console.log(e))
}
export const getProdById = (name) => (dispatch) => {
    axios(`http://localhost:3001/products/${name}`)
    .then((r) => dispatch(getProductsById(r.data)))
    .catch((e) => console.log(e))
}
export const postProd = () => (dispatch) => {
    axios('http://localhost:3001/')
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

