import axios from 'axios';
import {getAllProducts, getProductsById} from './ProductSlice';

export const getProducts = () => (dispatch) => {
    axios('http://localhost:3001/products')
    .then((r) => dispatch(getAllProducts(r.data.results)))
    .catch((e) => console.log(e))
}
export const getProdById = () => (dispatch) => {
    axios('http://localhost:3001/products')
    .then((r) => dispatch(getProductsById(r.data)))
    .catch((e) => console.log(e))
}

