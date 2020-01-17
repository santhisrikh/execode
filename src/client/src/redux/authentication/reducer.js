import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from "./actionTypes";

let localToken = localStorage.getItem("token");
if (localToken === "undefined") localToken = "";

const initState = {
  isAuth: false,
  isLoading: false,
  token: localToken,
  isRegistering: false,
  registerSuccess: false,
  error: false,
  errorType: "",
  errorMessage: ""
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        error: false,
        errorType: "",
        errorMessage: "",
        isLoading: true
      };
    case LOGIN_USER_SUCCESS:
      localStorage.setItem("token", payload.Authorization);
      return {
        ...state,
        isAuth: true,
        token: payload.Authorization,
        isLoading: false
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        isAuth: false,
        token: "",
        isLoading: false,
        error: true,
        errorType: "login",
        errorMessage: "login failed"
      };
    case LOGOUT_USER_REQUEST:
      return {
        ...state,
        error: false,
        errorType: "",
        errorMessage: ""
      };
    case LOGOUT_USER_SUCCESS:
      localStorage.setItem("token", "");
      return {
        ...state,
        isAuth: false,
        token: ""
      };
    case LOGOUT_USER_FAILURE:
      return {
        ...state,
        error: true,
        errorType: "logout",
        errorMessage: "logout failed"
      };
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        error: false,
        errorType: "",
        errorMessage: "",
        isRegistering: true
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isRegistering: false
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        isRegistering: false,
        error: true,
        errorType: "register",
        errorMessage: "registration failed"
      };
    default:
      return state;
  }
};

export default reducer;
