import axios from 'axios';
import { getUsers,getUsersId, putUser} from './UserSlice';

export const getProducts = () => {
return async function (dispatch) {
    let response = await axios.get("http://localhost:3000/products");
    return dispatch ({
        type: 'GET_PRODUCTS',
        payload: response.data,
    }    );
    }
}

export const getProductsById= (id) => {
    return async function (dispatch) {
        let response = await axios.get(`http://localhost:3000/products/${id}`);
        return dispatch ({
            type: 'GET_PRODUCTS_ID',
            payload: response.data,
        }    );
        }
}

export const postProduct = (payload) => {
    return async function (dispatch) {
        const response = await axios.post(
          'http://localhost:3000/products',
          payload
        );
        return response;
      };
}


//determinar como pasar el parametro para buscar por getTypeProductsByName
export const getTypeProducts= () => {
    return async function (dispatch) {
        let response = await axios.get("http://localhost:3000/typeproducts");
        return dispatch ({
            type: 'GET_PRODUCTS_TYPE',
            payload: response.data,
        }    );
        }
}

//determinar como pasar el parametro para buscar por getTrademarkProductsByName

export const getTrademarkProducts= () => {
    return async function (dispatch) {
        let response = await axios.get("http://localhost:3000/trademarkproducts");
        return dispatch ({
            type: 'GET_PRODUCTS_TRADEMARK',
            payload: response.data,
        }    );
        };
}

export const editProduct= (payload, id) => {
    return async function (dispatch) {
        const response = await axios.put(`http://localhost:3000/products/${id}`, payload
        );
        return response;
      };        
}