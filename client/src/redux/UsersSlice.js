import {createSlice} from '@reduxjs/toolkit';

export const ProductSlice = createSlice({
    name: 'productos',
    initialState: {
        users: [],
        detailUsers: {},
    },

    reducers: {
        getAllUsers: (state, action) => {
            state.users = action.payload
        },
        getUsersById: (state, action) => {
            state.detailUsers = action.payload
        },
        // postUser: (state, action) => {
        //     state.users = action.payload
        // },
        modifyUser: (state, action) => {
            state.users = action.payload
        },
        
    }
})

export default ProductSlice.reducer