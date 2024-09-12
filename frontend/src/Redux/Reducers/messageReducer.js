import { MESSAGE_SENT_FAIL, MESSAGE_SENT_REQUEST, MESSAGE_SENT_SUCCESS, USER_MESSAGE_FAIL, USER_MESSAGE_REQUEST, USER_MESSAGE_SUCCESS } from "../Constants/messageConstant";


let initialState = {
  messages: [],
  loading: false,
  error: null,
  newMessage: null,
  success: false
}

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_MESSAGE_REQUEST:
    case MESSAGE_SENT_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case USER_MESSAGE_SUCCESS:
      return {
        loading: false,
        messages: action.payload.conversation.messages
      }
    case MESSAGE_SENT_SUCCESS:
      return {
        loading: false,
        messages: [...state.messages, action.payload.message], // Append new message to existing messages
        newMessage: action.payload.message,
      }
    case USER_MESSAGE_FAIL:
    case MESSAGE_SENT_FAIL:
      return {
        loading: false,
        success: action.payload.success,
        error: action.payload
      }
    default:
      return state;
  }
}