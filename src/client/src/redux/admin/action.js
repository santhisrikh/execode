import {
  FETCH_USER_SUBMISSIONS,
  VIEW_USER_CODE,
  FETCH_ALL_CONTESTS_REQUEST,
  FETCH_ALL_CONTESTS_SUCCESS,
  FETCH_ALL_CONTESTS_FAILURE
} from "./actionType";
import axios from "../../utils/axiosInterceptor";

export const fetchUserSubmissions = () => {
  return {
    type: FETCH_USER_SUBMISSIONS
  };
};

export const fetchUserCode = id => {
  return {
    type: VIEW_USER_CODE,
    payload: id
  };
};

export const fetchAllContestsRequest = payload => ({
  type: FETCH_ALL_CONTESTS_REQUEST,
  payload
});

export const fetchAllContestsSuccess = payload => ({
  type: FETCH_ALL_CONTESTS_SUCCESS,
  payload
});

export const fetchAllContestsFailure = payload => ({
  type: FETCH_ALL_CONTESTS_FAILURE,
  payload
});

export const fetchAllContests = payload => {
  return dispatch => {
    dispatch(fetchAllContestsRequest());
    return axios
      .get(
        "/contests",
        {},
        {
          headers: {
            Authorization: `JWT ${payload.token}`
          }
        }
      )
      .then(res => {
        dispatch(fetchAllContestsSuccess(res.data));
      })
      .catch(() => dispatch(fetchAllContestsFailure()));
  };
};
