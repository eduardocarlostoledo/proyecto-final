import axios from "axios";
export const GET_CART = "GET_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART";

export const getCart = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3001/cart');
    dispatch({type: GET_CART, payload: response.data});
  } catch (error) {
    console.log(error);
  }
};

export const addToCart = (product) => async (dispatch) => {
  try {
    await axios.post("http://localhost:3001/cart", product);
    dispatch({type: ADD_TO_CART, payload: product});
  } catch (error) {
    console.log(error);  
  }
};

export const deleteProductFromCart = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3001/cart/${id}`);
    dispatch({type: DELETE_PRODUCT_FROM_CART, payload: id});
  } catch (error) {
    console.log(error); 
  } 
};

export const deleteCart = () => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3001/cart`);
    dispatch({type: GET_CART, payload: []});
  } catch (error) {
    console.log(error);
  }
};