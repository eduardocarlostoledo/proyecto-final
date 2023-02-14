import {configureStore} from '@redux.js/toolkit';
import productos from './ProductSlice'


export default configureStore({
    reducer: {
        productos: productos,
    }
})