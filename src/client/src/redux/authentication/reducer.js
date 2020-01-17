import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER
} from "./actionTypes";

let localToken = localStorage.getItem("token");
if (localToken === "undefined") localToken = "";

const initState = {
  isAuth: false,
  isLoading: false,
  token: localToken
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_USER_SUCCESS:
      console.log(payload);
      localStorage.setItem("token", payload.Authorization);
      return {
        ...state,
        isAuth: true,
        token: payload.Authorization,
        isLoading: false
      };
    case LOGIN_USER_FAILURE:
      localStorage.setItem("token", "");
      return {
        ...state,
        isAuth: false,
        token: "",
        isLoading: false
      };
    case LOGOUT_USER:
      localStorage.setItem("token", "");
      return {
        ...state,
        isAuth: false,
        token: ""
      };
    default:
      return state;
  }
};

export default reducer;
