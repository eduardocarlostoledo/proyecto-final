import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const UserSlice = createSlice({
    name: 'users',
    initialState: {
        usersList: [],
        detailUsers: {},
    },

    reducers: {
        getUsers: (state, action) => {
            state.usersList = action.payload
        },
        getUsersId: (state, action) => {
            state.detailUsers = action.payload
        },
        putUser: (state, action) => {
            state.usersList = action.payload
        },
        
    }
})

export const {getUsers, getUsersId, putUser} = UserSlice.actions;

export default UserSlice.reducer;


export const getUser = () => (dispatch) => {
    axios('https://localhost:3001/users')
    .then((r) => dispatch(getUsers(r.data.results)))
    .catch((e) => console.log(e))
}
export const getUsersById = (id) => (dispatch) => {
    axios(`https://localhost:3001/users/${id}`)
    .then((r) => dispatch(getUsersId(r.data)))
    .catch((e) => console.log(e))
}
export const putByUser = () => (dispatch) => {
    axios('https://localhost:3001/register')
    .then((r) => dispatch(putUser(r.data)))
    .catch((e) => console.log(e))
}

