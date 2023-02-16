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



/*import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchUser } from './api'

export const fetchUserById = createAsyncThunk('users/fetchByIdStatus', async (userId) => {
  const response = await fetchUser(userId)
  return response.data
})

const userSlice = createSlice({
  name: 'user',
  initialState: { entities: {}, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.entities[action.payload.id] = action.payload
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default userSlice.reducer
 */