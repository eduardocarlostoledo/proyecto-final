import axios from "axios";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_USER_BY_ID="GET_USER_BY_ID";
export const USER_REGISTER= "USER_REGISTER";
export const UPDATE_USER="UPDATE_USER";

export const getAllUsers = () => async (dispatch) => {
    try {
        return await axios('/users').then(r=>
            dispatch({type: GET_ALL_USERS, payload:r.data.data}))
    } catch (error) {
            console.log(error)
    }
}

export const getUserById = (id) => async (dispatch) => {
  return await axios(`/users/${id}`).then(r=>
    dispatch({type: GET_USER_BY_ID, payload:{...r.data.data}}))
};

export const userRegister =  (payload)=> async()=>{
  return await axios.post("/users/register",payload)
};
export const updateUser =(payload)=> async()=>{
    return await axios.put("/users/:id",payload)
};

