import {configureStore} from '@reduxjs/toolkit';
import productos from './slices/ProductSlice'
import usuarios from './slices/UsersSlice';

export default configureStore({
    reducer: {
        productos,
        usuarios,
    },
});