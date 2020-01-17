import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER
} from "./actionTypes";
import axios from "../../utils/axiosInterceptor";

export const loginUserRequest = () => ({
  type: LOGIN_USER_REQUEST
});

export const loginUserSuccess = payload => ({
  type: LOGIN_USER_SUCCESS,
  payload
});

export const loginUserFail = () => ({
  type: LOGIN_USER_FAILURE
});

export const logoutUser = () => ({
  type: LOGOUT_USER
});

export const loginUser = payload => {
  return dispatch => {
    dispatch(loginUserRequest());
    return axios
      .post("/login", {
        email: payload.email,
        password: payload.password
      })
      .then(res => {
        dispatch(loginUserSuccess(res.data));
      })
      .catch(() => dispatch(loginUserFail()));
  };
};

loginUser({ email: "test", password: "test" });
