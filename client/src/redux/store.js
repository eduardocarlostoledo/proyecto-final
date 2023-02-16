// import {configureStore} from '@reduxjs/toolkit';
// import productReducer from './ProductSlice'
// import usersReducer from './UsersSlice';

// const store = configureStore({
//     reducer: {
//         productos: productReducer,
//         users: usersReducer,
//     },
// })

// export default store;

import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';

import rootReducer from './reducer';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;

