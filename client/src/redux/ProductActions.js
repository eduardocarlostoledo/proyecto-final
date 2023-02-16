// import axios from 'axios';


// import {getAllProducts, getProductsById, postProduct, getTypeProducts, getTrademarkProducts} from './ProductSlice';

// export const getProducts = () => (dispatch) => {
//     axios('http://localhost:3001/products')
//     .then((r) => dispatch(getAllProducts(r.data.results)))
//     .catch((e) => console.log(e))
// }
// export const getProdById = (name) => (dispatch) => {
//     axios(`http://localhost:3001/products/params/${name}`)
//     .then((r) => dispatch(getProductsById(r.data)))
//     .catch((e) => console.log(e))
// }
// export const postProd = () => (dispatch) => {
//     axios('http://localhost:3001/products')
//     .then((r) => dispatch(postProduct(r.data)))
//     .catch((e) => console.log(e))
// }

// export const getTypeProduct = () => (dispatch) => {
//     axios('http://localhost:3001/typeproducts')
//     .then((r) => dispatch(getTypeProducts(r.data)))
//     .catch((e) => console.log(e))
// }
// export const getTrademarkProduct = () => (dispatch) => {
//     axios('http://localhost:3001/typeproducts')
//     .then((r) => dispatch(getTrademarkProducts(r.data)))
//     .catch((e) => console.log(e))
// }


import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_ALL_PRODUCTS_NAME="GET_ALL_PRODUCTS_NAME"
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT='UPDATE_PRODUCT';
export const GET_ALL_BRANDS= 'GET_ALL_BRANDS';
export const GET_ALL_TYPES= 'GET_ALL_TYPES';

export const getAllProducts = () => async (dispatch) => {
    try {
        return await axios('/products').then(r=>
            dispatch({type: GET_ALL_PRODUCTS, payload:r.data}))
    } catch (error) {
            console.log(error)
    }
}

export const getAllProductsName =(name)=>async (dispatch)=>{
  try {
    return await axios(`/products/params/${name}`).then((r)=>
      dispatch({type:GET_ALL_PRODUCTS_NAME, payload: r.data}))
  } catch (error) {
    console.log(error)
  }
}

export const getProductDetail = (name) => async (dispatch) => {
  return await axios.get(`/products/params/${name}`).then(r=>
    dispatch({type: GET_PRODUCT_DETAIL, payload:{...r.data.data[0]}}))
};

export const createProduct =  (payload)=> async()=>{
  return await axios.post("/products",payload)
};

export const updateProduct= (payload)=> async()=>{
    return await axios.put("/products",payload)
};

export const getAllBrands = () => async (dispatch) => {
    try {
        return await axios('/products/brands').then(r=>
            dispatch({type: GET_ALL_BRANDS, payload:r.data.data}))
    } catch (error) {
            console.log(error)
    }
}

export const getAllTypes = () => async (dispatch) => {
    try {
        return await axios('/products/types').then(r=>
            dispatch({type: GET_ALL_TYPES, payload:r.data.data}))
    } catch (error) {
            console.log(error)
    }
}
