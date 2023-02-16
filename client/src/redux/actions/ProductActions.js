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
    return await axios(`/products?name=${name}`).then((r)=>
      dispatch({type:GET_ALL_PRODUCTS_NAME, payload: r.data}))
  } catch (error) {
    console.log(error)
  }
}

export const getProductDetail = (name) => async (dispatch) => {
  return await axios.get(`products/params/${name}`).then(r=>
    dispatch({type: GET_PRODUCT_DETAIL, payload:{...r.data.data[0]}}))
};

export const createProduct =  (payload)=> async()=>{
  return await axios.post("/products",payload)
};

export const updateProduct= (payload)=> async()=>{
    return await axios.put("/products/:id",payload)
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





