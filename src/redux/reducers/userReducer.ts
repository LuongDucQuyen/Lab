import { INCREMENT, DECREMENT } from "../actions/countAction";

const INITIAL_STATE = {
  count: 0,
  name: "Edric",
  account: {
    access_token: "",
    refresh_token: "",
    username: "",
    image: "",
    role: "",
  },
  isAuthenticated: false,
};

const useReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "FETCH_USER_LOGIN_SUCCESS":
      // console.log("check action", action);
      return {
        ...state,
        account: {
          access_token: action.payload.data,
          refresh_token: "da connect",
          username: "edric phan",
          image: "hok co dau",
          role: "quy tac",
        },
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default useReducer;
