import {configureStore} from '@reduxjs/toolkit';
import ProductSlice from './ProductSlice'
import UsersSlice from './UsersSlice';

export default configureStore({
    reducer: {
        productos: ProductSlice,
        users: UsersSlice,
    },
})