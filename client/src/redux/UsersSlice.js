import {createSlice} from '@reduxjs/toolkit';

export const UserSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        detailUsers: {},
    },

    reducers: {
        getUsers: (state, action) => {
            return { ...state, users: action.payload,}
        },
        getUsersId: (state, action) => {
            return { ...state, detailUsers: action.payload,}
        },
        putUser: (state, action) => {
            return { ...state, users: action.payload,}
        },
        
    }
})

export const {getUsers, getUsersId, putUser} = UserSlice.actions;

export default UserSlice.reducer