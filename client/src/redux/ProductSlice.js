import {createSlice} from '@reduxjs/toolkit';

const ProductSlice = createSlice({
    name: 'productos',
    initialState: {
        productos: [],
        detail: {},
    },

    reducers: {
        getAllProducts: (state, action) => {
            return { ...state, productos: action.payload,}
        },
        getProductsById: (state, action) => {
            return { ...state, detail: action.payload,}
        },
        postProduct: (state, action) => {
            return { ...state, productos: action.payload,}
        },
        getTypeProducts: (state, action) => {
            return { ...state, productos: action.payload,}
        },
        getTrademarkProducts: (state, action) => {
            return { ...state, productos: action.payload,}
        }
    }
})
export const {getAllProducts, getProductsById, postProduct, getTypeProducts, getTrademarkProducts} = ProductSlice.actions;
export default ProductSlice.reducer