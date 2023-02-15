import {configureStore} from '@reduxjs/toolkit';
import productReducer from './ProductSlice'
import usersReducer from './UsersSlice';

const store = configureStore({
    reducer: {
        productos: productReducer,
        users: usersReducer,
    },
})

export default store;

