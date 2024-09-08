import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../Reducers/userReducer';
const reducer = combineReducers({
  user: userReducer
})
let initialState = {}
const store = configureStore({
  reducer, preloadedState: initialState,
})

export default store;