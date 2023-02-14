import axios from 'axios';
import {getAllProducts, getProductsById, postProduct, getTypeProducts, getTrademarkProducts} from './ProductSlice';

export const getProducts = () => (dispatch) => {
    axios('http://localhost:3001/products')
    .then((r) => dispatch(getAllProducts(r.data.results)))
    .catch((e) => console.log(e))
}
export const getProdById = (id) => (dispatch) => {
    axios(`http://localhost:3001/products/${id}`)
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


/*
import axios from 'axios';
import {getAllProducts, getProductsById} from './ProductSlice';

export const getProducts = () => {
return async function (dispatch) {
    let results = await axios.get("http://localhost:3000/products");
    return dispatch ({
        type: 'GET_PRODUCTS',
        payload: results.data,
    }    );
    }
}

export const getProductsById= (id) => {
    return async function (dispatch) {
        let results = await axios.get(`http://localhost:3000/products/${id}`);
        return dispatch ({
            type: 'GET_PRODUCTS_ID',
            payload: results.data,
        }    );
        }
}

export const postProduct = () => {
    
}

export const getTypeProducts= () => {
    
}

export const getTrademarkProducts= () => {
    
}

*/


