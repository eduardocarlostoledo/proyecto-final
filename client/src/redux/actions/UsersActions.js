

import axios from 'axios';
import {getUsers, getUsersId, putUser} from './UsersSlice';

export const getUser = () => (dispatch) => {
    axios('http://localhost:3001/users')
    .then((r) => dispatch(getUsers(r.data.results)))
    .catch((e) => console.log(e))
}
export const getUsersById = (id) => (dispatch) => {
    axios(`http://localhost:3001/users/${id}`)
    .then((r) => dispatch(getUsersId(r.data)))
    .catch((e) => console.log(e))
}
export const putByUser = () => (dispatch) => {
    axios('http://localhost:3001/register')
    .then((r) => dispatch(putUser(r.data)))
    .catch((e) => console.log(e))
}

