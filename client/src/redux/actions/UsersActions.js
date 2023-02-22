import axios from "axios";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_USER_BY_ID="GET_USER_BY_ID";
export const USER_REGISTER= "USER_REGISTER";
export const UPDATE_USER="UPDATE_USER";
export const GET_EMAIL="GET_EMAIL";


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


export function userRegister(payload) { 
  return async function(dispatch){
      const response = await axios.post(`http://localhost:3001/users/register/`,payload);
      return response;
  };
};



export function userLogin(payload) { 
  return async function(dispatch){
      const response = await axios.post(`http://localhost:3001/users/login/`,payload);
      return response;
  };
};


export function GetFiltersForEmail () { 
  return async function(dispatch){
      let json = await axios.get(`http://localhost:3001/users`);
      return dispatch({
          type: GET_EMAIL,
          payload: json.data
      });
  };
};