

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
        return await axios('http://localhost:3001/products').then(r=>
            dispatch({type: GET_ALL_PRODUCTS, payload:r.data}))
    } catch (error) {
            console.log(error)
    }
}

export const getAllProductsName =(name)=>async (dispatch)=>{
  try {
    return await axios(`http://localhost:3001/products?name=${name}`).then((r)=>
      dispatch({type:GET_ALL_PRODUCTS_NAME, payload: r.data}))
  } catch (error) {
    console.log(error)
  }
}

export const getProductDetail = (name) => async (dispatch) => {
  return await axios.get(`http://localhost:3001/products/params/${name}`).then(r=>
    dispatch({type: GET_PRODUCT_DETAIL, payload:{...r.data.data[0]}}))
};

// export const createProduct =  (payload)=> async()=>{
//   return await axios.post("http://localhost:3001/products",payload)
// };
// export function createProduct(payload) { 
//   return async function(dispatch){
//       const response = await axios.post("http://localhost:3001/products",payload);
//       return response;
//   };
// };
export const createProduct = (product) => {
  return async (dispatch) => {
    console.log("/products", product);
    try {
      const response = await fetch("http://localhost:3001/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      console.log("CREATE_PRODUCT", response);
      const data = await response.json();
      dispatch({ type: "CREATE_PRODUCT", payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};


export const updateProduct= (payload)=> async()=>{
    return await axios.put("/products",payload)
};

// export const getAllBrands = () => async (dispatch) => {
//     try {
//         return await axios.get('http://localhost:3001/products/brands').then(r=>
//             dispatch({type: GET_ALL_BRANDS, payload:r.data.data}))
//     } catch (error) {
//             console.log(error)
//     }
// }

// export const getAllTypes = () => async (dispatch) => {
//     try {
//         return await axios.get('http://localhost:3001/products/types').then(r=>
//             dispatch({type: GET_ALL_TYPES, payload:r.data.data}))
//     } catch (error) {
//             console.log(error)
//     }
// }
export const getAllBrands = () => {
  return async function(dispatch){
    const json = await axios.get('http://localhost:3001/products/brands')
    return dispatch({type: GET_ALL_BRANDS, payload: json.data})
  }
}


export const getAllTypes = () => {
  return async function(dispatch){
    const json = await axios.get('http://localhost:3001/products/types')
    return dispatch({type: GET_ALL_TYPES, payload: json.data})
  }
}
