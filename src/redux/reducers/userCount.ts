import { INCREMENT, DECREMENT } from "../actions/countAction";

const INITIAL_STATE = {
  count: 0,
  name: "Edric",
};

const counterReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
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

export default counterReducer;
