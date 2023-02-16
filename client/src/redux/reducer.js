import {
    GET_ALL_PRODUCTS,
    GET_ALL_PRODUCTS_NAME,
    GET_PRODUCT_DETAIL,
    CREATE_PRODUCT,
    UPDATE_PRODUCT,
    GET_ALL_BRANDS,
    GET_ALL_TYPES
    } from "./ProductActions";
    
    import{
        GET_ALL_USERS,
        GET_USER_BY_ID,
        USER_REGISTER,
        UPDATE_USER
    } from "./UsersActions";
    
    const initialState= {
        products: [],
        brands:[],
        types:[],
        productDetail:{},
        users: [],
        userDetail:{}
    }
    
    const rootReducer=(state=initialState,action)=>{
        switch(action.type){
            case GET_ALL_PRODUCTS: return{
                ...state,
                products: action.payload,
            }
            case GET_ALL_PRODUCTS_NAME: return{
                ...state,
                products: action.payload,
            }
            case GET_PRODUCT_DETAIL: return {
                ...state,
                productDetail:action.payload
            }
            case CREATE_PRODUCT: return{
                ...state,
            } 
            case UPDATE_PRODUCT: return{
                ...state,
            }
            case GET_ALL_BRANDS: return{
                ...state,
                brands:action.payload,
            }
            case GET_ALL_TYPES: return {
                ...state,
                types:action.payload
            }
            case GET_ALL_USERS: return{
                ...state,
                users:action.payload
            }
            case GET_USER_BY_ID: return{
                ...state,
                userDetail:action.payload
            }
            case USER_REGISTER: return {
                ...state
            }
            case UPDATE_USER: return {
                ...state
            }
            default: return {...state}
        }
    }
    
    export default rootReducer;