import axios from 'axios';
import {createSlice} from '@reduxjs/toolkit';

import Json from '../../components/Productos_PF.json'

export const ProductSlice = createSlice({
    name: 'productos',
    initialState: {
        listProductos: [],
        detail: {},
    },

    reducers: {
        addProduct: (state, action) => {
            state.listProductos = action.payload
        },
        getProductsById: (state, action) => {
            state.detail = action.payload
        },
        postProduct: (state, action) => {
            state.listProductos = action.payload
        },
        getTypeProducts: (state, action) => {
            state.listProductos = action.payload
        },
        getTrademarkProducts: (state, action) => {
            state.listProductos = action.payload
        }
    }
})
export const {addProduct, getProductsById, postProduct, getTypeProducts, getTrademarkProducts} = ProductSlice.actions;
export default ProductSlice.reducer;



export const getProducts = () => (dispatch) => {
    axios.get('https://localhost:3001/products')
      .then((response) => {
        dispatch(addProduct(response.data.response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };


// export const getProducts = () => {
//     return function(dispatch){
//         dispatch({type: addProduct, payload: Json})
//     }
// }

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