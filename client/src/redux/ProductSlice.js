import {createSlice} from '@reduxjs/toolkit';

export const ProductSlice = createSlice({
    name: 'productos',
    initialState: {
        productos: [],
        detail: {},
    },

    reducers: {
        getAllProducts: (state, action) => {
            state.productos = action.payload
        },
        getProductsById: (state, action) => {
            state.detail = action.payload
        }
    }
})

export default ProductSlice.reducer