import axios from "axios";
import { MESSAGE_SENT_FAIL, MESSAGE_SENT_REQUEST, MESSAGE_SENT_SUCCESS, USER_MESSAGE_FAIL, USER_MESSAGE_REQUEST, USER_MESSAGE_SUCCESS } from "../Constants/messageConstant"

export const getMessages = (id) => async (dispatch) => {
  try {
    dispatch({ type: USER_MESSAGE_REQUEST });
    const { data } = await axios.get(`/api/v1/chat/message/${id}`);
    dispatch({
      type: USER_MESSAGE_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: USER_MESSAGE_FAIL,
      payload: error.response || error.response.data.message ?
        error.response.data.message : error.message
    })
  }
}

export const sentMessage = (id, message) => async (dispatch) => {
  try {
    dispatch({ type: MESSAGE_SENT_REQUEST });
    const config = {
      header: {
        "Content-Type": "application/json"
      }
    }
    const { data } = await axios.post(`/api/v1/chat/message/${id}`, message, config);
    dispatch({
      type: MESSAGE_SENT_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: MESSAGE_SENT_FAIL,
      payload: error.response || error.response.data.message ?
        error.response.data.message : error.message
    })
  }
}