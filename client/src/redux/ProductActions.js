import axios from 'axios';
import {getAllProducts, getProductsById} from './ProductSlice';

export const getProducts = () => (dispatch) => {
    axios('http://localhost:3001/products')
}