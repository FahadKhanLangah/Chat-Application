import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { logoutReducer, userReducer } from '../Reducers/userReducer';
import { messageReducer } from '../Reducers/messageReducer';
const reducer = combineReducers({
  user: userReducer,
  lout: logoutReducer,
  messages : messageReducer
})
let initialState = {}
const store = configureStore({
  reducer, preloadedState: initialState,
})

export default store;