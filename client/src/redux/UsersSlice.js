import {createSlice} from '@reduxjs/toolkit';

export const ProductSlice = createSlice({
    name: 'productos',
    initialState: {
        users: [],
        detailUsers: {},
    },

    reducers: {
        getUsers: (state, action) => {
            state.users = action.payload
        },
        getUsersId: (state, action) => {
            state.detailUsers = action.payload
        },
        putUser: (state, action) => {
            state.users = action.payload
        },
        
    }
})

export default ProductSlice.reducer