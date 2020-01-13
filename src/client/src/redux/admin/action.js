import { FETCH_USER_SUBMISSIONS, VIEW_USER_CODE } from "./actionType";

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
