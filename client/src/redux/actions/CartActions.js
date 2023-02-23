import axios from "axios";
export const GET_CART = "GET_CART";

export const getCart = () => async (dispatch) => {
    try {
        return await axios('http://localhost:3001/cart').then(r=>
            dispatch({type: GET_CART, payload:r.data}))
    } catch (error) {
            console.log(error)
    }
}
export const addToCart=(product)=> async()=>{
    try {
        return await axios.post("http://localhost:3001/cart",product)
    } catch (error) {
      console.log(error);  
    }
}
export const deleteProductToCart=(id)=> async()=>{
    try {
        return await axios.delete(`http://localhost:3001/cart/${id}`)
    } catch (error) {
       console.log(error); 
    } 
};
export const deleteCart=()=> async()=>{
    try {
        return await axios.delete(`http://localhost:3001/cart`)
    } catch (error) {
        console.log(error);
    }
};