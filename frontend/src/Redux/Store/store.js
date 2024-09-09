import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { logoutReducer, userReducer } from '../Reducers/userReducer';
const reducer = combineReducers({
  user: userReducer,
  lout:logoutReducer
})
let initialState = {}
const store = configureStore({
  reducer, preloadedState: initialState,
})

export default store;