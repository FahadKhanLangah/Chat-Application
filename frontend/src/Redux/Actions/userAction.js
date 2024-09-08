import { LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGOUT_USER_FAIL, LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, OTHER_USER_FAIL, OTHER_USER_REQUEST, OTHER_USER_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../Constants/userConstant"
import axios from 'axios'

export const login = (formData) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_USER_REQUEST });
    const config = {
      headers: { "Content-Type": "application/json" }
    }
    const { data } = await axios.post('/api/v1/users/login', formData, config);
    console.log("Whata data arrived in action ", data)
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: LOGIN_USER_FAIL,
      payload: error.response || error.response.data.message ?
        error.response.data.message : error.message
    })
  }
}

export const registerUser = (formData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });
    const config = {
      headers: { "Content-Type": "multipart/form-data" }  // Important: Use multipart/form-data for file uploads
    };
    const { data } = await axios.post('/api/v1/users/register', formData, config);
    console.log("Whata data arrived in action ", data)
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response || error.response.data.message ?
        error.response.data.message : error.message
    })
  }
}

export const getUserDetail = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });
    const { data } = await axios.get('/api/v1/users/me');
    console.log("Whata data arrived in action of load user ", data)
    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error.response || error.response.data.message ?
        error.response.data.message : error.message
    })
  }
}

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT_USER_REQUEST });
    const { data } = await axios.get('/api/v1/users/me');
    console.log("Whata data arrived in action of load user ", data)
    dispatch({
      type: LOGOUT_USER_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: LOGOUT_USER_FAIL,
      payload: error.response || error.response.data.message ?
        error.response.data.message : error.message
    })
  }
}

export const getOtherUsers = () => async (dispatch) => {
  try {
    dispatch({ type: OTHER_USER_REQUEST });
    const { data } = await axios.get('/api/v1/users/others');
    dispatch({
      type: OTHER_USER_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: OTHER_USER_FAIL,
      payload: error.response || error.response.data.message ?
        error.response.data.message : error.message
    })
  }
}