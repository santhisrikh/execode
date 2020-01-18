import {
  FETCH_USER_SUBMISSIONS,
  VIEW_USER_CODE,
  FETCH_ALL_CONTESTS_FAILURE,
  FETCH_ALL_CONTESTS_SUCCESS,
  FETCH_ALL_CONTESTS_REQUEST
} from "./actionType";

const contests = [
  {
    contest_id: "INTEGER",
    contest_name: "Today's Contest",
    start_date: "DATETIME",
    end_date: "DATETIME",
    end_time: "DATETIME",
    details: "STRING",
    show_leader_board: "DATETIME"
  },
  {
    contest_id: "INTEGER",
    contest_name: "Contest-1",
    start_date: "DATETIME",
    end_date: "DATETIME",
    end_time: "DATETIME",
    details: "STRING",
    show_leader_board: "DATETIME"
  },
  {
    contest_id: "INTEGER",
    contest_name: "Contest-2",
    start_date: "DATETIME",
    end_date: "DATETIME",
    end_time: "DATETIME",
    details: "STRING",
    show_leader_board: "DATETIME"
  },
  {
    contest_id: "INTEGER",
    contest_name: "Contest-3",
    start_date: "DATETIME",
    end_date: "DATETIME",
    end_time: "DATETIME",
    details: "STRING",
    show_leader_board: "DATETIME"
  },
  {
    contest_id: "INTEGER",
    contest_name: "Contest-4",
    start_date: "DATETIME",
    end_date: "DATETIME",
    end_time: "DATETIME",
    details: "STRING",
    show_leader_board: "DATETIME"
  }
];

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
  },
  contests,
  isLoading: false,
  error: false,
  errorType: "",
  errorMessage: ""
};

export default (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ALL_CONTESTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
        errorType: "",
        errorMessage: ""
      };
    case FETCH_ALL_CONTESTS_SUCCESS:
      return {
        ...state,
        contests: [...payload.contests],
        isLoading: false
      };
    case FETCH_ALL_CONTESTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorType: "contest",
        errorMessage: "Fetching contest has failed"
      };
    // NOT VERIFIED
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
