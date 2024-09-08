import { combineReducers, configureStore } from '@reduxjs/toolkit';
const reducer = combineReducers({

})
let initialState = {}
const store = configureStore({
  reducer, preloadedState: initialState,
})

export default store;