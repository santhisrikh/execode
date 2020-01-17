import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER
} from "./actionTypes";

const localToken = localStorage.getItem("token");

const initState = {
  isAuth: true,
  isLoading: false,
  token: localToken || ""
};

const reducer = (state = initState, { type, payload }) => {
  console.log("reducer called", payload);
  switch (type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_USER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        isAuth: true,
        token: payload.token,
        isLoading: false
      };
    case LOGIN_USER_FAILURE:
      localStorage.setItem("token", "");
      return {
        isAuth: false,
        token: "",
        isLoading: false
      };
    case LOGOUT_USER:
      localStorage.setItem("token", "");
      return {
        isAuth: false,
        token: ""
      };
    default:
      return state;
  }
};

export default reducer;
