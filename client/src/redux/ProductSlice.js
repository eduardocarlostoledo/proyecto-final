import {createSlice} from '@reactjs/toolkit';

export const ProductSile = createSlice({
    name: "productos",
    initialStae: {
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