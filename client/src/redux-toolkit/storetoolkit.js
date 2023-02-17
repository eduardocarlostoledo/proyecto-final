import {configureStore} from '@reduxjs/toolkit';
import productos from './slice/ProductSlice';
import usuarios from './slice/UserSlice';


export default configureStore({
    reducer: {
        productos,
        usuarios,
    },
});