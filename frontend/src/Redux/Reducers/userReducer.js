import { LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGOUT_USER_FAIL, LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, OTHER_USER_DETAIL_FAIL, OTHER_USER_DETAIL_REQUEST, OTHER_USER_DETAIL_SUCCESS, OTHER_USER_FAIL, OTHER_USER_REQUEST, OTHER_USER_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../Constants/userConstant";


const initialState = {
  loading: false,
  success: false,
  user: {},
  users: []
}
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
    case REGISTER_USER_REQUEST:
    case LOAD_USER_REQUEST:
    case OTHER_USER_REQUEST:
    case OTHER_USER_DETAIL_REQUEST:
      return {
        ...state,
        loading: true
      }
    case LOGIN_USER_SUCCESS:
    case REGISTER_USER_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
      }
    case LOAD_USER_SUCCESS:
    case OTHER_USER_DETAIL_SUCCESS:
      return {
        loading: false,
        user: action.payload.user
      }
    case OTHER_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload.users,
        success: action.payload.success
      }
    case LOGIN_USER_FAIL:
    case REGISTER_USER_FAIL:
    case LOAD_USER_FAIL:
    case OTHER_USER_FAIL:
    case OTHER_USER_DETAIL_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state;
  }
}
const logoutState = {
  loading: false,
  logoutSuccess: false,
  user: {},
  isAuth: true
}
export const logoutReducer = (state = logoutState, action) => {
  switch (action.type) {
    case LOGOUT_USER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case LOGOUT_USER_SUCCESS:
      return {
        loading: false,
        logoutSuccess: action.payload.success,
        isAuth: false
      }
    case LOGOUT_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuth: true
      }

    default:
      return state;
  }
}