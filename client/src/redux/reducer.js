import {
    GET_ALL_PRODUCTS,
    GET_ALL_PRODUCTS_NAME,
    GET_PRODUCT_DETAIL,
    CREATE_PRODUCT,
    UPDATE_PRODUCT,
    GET_ALL_BRANDS,
    GET_ALL_TYPES,
    GET_PAGE
    } from './actions/ProductActions'
    
    import{
        GET_ALL_USERS,
        GET_USER_BY_ID,
        USER_REGISTER,
        UPDATE_USER,
        GET_EMAIL,
        USER_ACTIVE,
        CHANGE_NAV
    } from './actions/UsersActions';
    
    const initialState= {
        products: [],
        paginatedProducts: [],
        brands:[],
        types:[],
        productDetail:{},
        users: [],
        userDetail:{},
        emails : [],
        UserActive : {},
        ChangeNav: false
        // ChangeNav : JSON.parse(localStorage.getItem("UserActive")),
    }
    
    const rootReducer = (state=initialState,action) => {

        switch(action.type) {

            case GET_ALL_PRODUCTS: 
                
                return{ ...state, products: action.payload, }

            case GET_ALL_PRODUCTS_NAME: 
                
                return{ ...state, products: action.payload, }

            case GET_PRODUCT_DETAIL: 
            
                return { ...state, productDetail:action.payload }

            case CREATE_PRODUCT: 
            
                return { ...state, } 

            case UPDATE_PRODUCT: 
            
                return{ ...state, }

            case GET_ALL_BRANDS: 
            
                return{ ...state, brands:action.payload, }

            case GET_ALL_TYPES: 
            
                return { ...state, types:action.payload }

            case GET_ALL_USERS: 
            
                return{ ...state, users:action.payload }

            case GET_USER_BY_ID: 
            
                return{ ...state, userDetail:action.payload }

            case USER_REGISTER: 
            
                return { ...state }

            case UPDATE_USER: 
            
                return { ...state }

        
            case GET_EMAIL: 

                return { ...state,
                    emails : action.payload }


            case GET_PAGE:
                return {...state, paginatedProducts:action.payload}

                case USER_ACTIVE: 
                const userActive = action.payload;
                const uss = localStorage.setItem("USUARIO", JSON.stringify(userActive))
                return { ...state,
                    ChangeNav: true,
                    UserActive : JSON.parse(localStorage.getItem("USUARIO")) }

                case "deleteUserLocalStorage":
                    
                return { 
                    ...state, 
                    ChangeNav: false
                }
                   
        
                
            default: return {...state}
            
        }

    }
    
    export default rootReducer;