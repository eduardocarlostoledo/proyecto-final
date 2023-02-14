


export const getUsers = () => {
    
return async function (dispatch) {
    let response = await axios.get("http://localhost:3000/users");
    return dispatch ({
        type: 'GET_USERS',
        payload: response.data,
    }    );
    }
}


export const getUsersId = (id) => {
    
    return async function (dispatch) {
        let response = await axios.get(`http://localhost:3000/users/${id}`);
        return dispatch ({
            type: 'GET_USER_ID',
            payload: response.data,
        }    );
        }
    }

    
export const putUser = (payload,id) => {
    
    return async function (dispatch) {
        let response = await axios.put("http://localhost:3000/register", payload);
        return response;
        }
    }