import { FETCH_USER_SUBMISSIONS, VIEW_USER_CODE } from "./actionType";

const initState = {
  userSubmissions: {
    submissions: [
      {
        id: "user1",
        userName: "Krishna",
        score: "5",
        totalScore: "6",
        rank: "2",
        code: "console.log('Krishna')",
        language: "javascript"
      },
      {
        id: "user2",
        userName: "Sachin",
        score: "6",
        totalScore: "6",
        rank: "1",
        code: "print('Sachin')",
        language: "python"
      }
    ],
    viewCode: "",
    viewLanguage: ""
  }
};

export default (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USER_SUBMISSIONS: {
      return {
        ...state
      };
    }
    case VIEW_USER_CODE: {
      const submissions = [...state.userSubmissions.submissions];
      let code = "";
      let language = "";
      submissions.forEach(submission => {
        if (submission.id === payload) {
          code = submission.code;
          language = submission.language;
        }
      });
      return {
        ...state,
        userSubmissions: {
          ...state.userSubmissions,
          viewCode: code,
          viewLanguage: language
        }
      };
    }
    default:
      return {
        ...state
      };
  }
};
