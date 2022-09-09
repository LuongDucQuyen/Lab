import { stat } from "fs";
import * as ActionType from "../contants/userProfileConstant";

const initialState = {
  userInfo: null,
  data: null,
  isLoading: false,
  error: null,
  TwoFaCode: null,
  TwoFaCodeUpdated: null,
  error2FaCode: null,
};

const userProfileReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case ActionType.GET_USERINFO_REQUEST:
      state.isLoading = true;
      state.error = null;

      return { ...state };
    case ActionType.GET_USERINFO_SUCCESS:
      state.isLoading = false;
      state.error = null;
      state.userInfo = payload;

      return { ...state };
    case ActionType.GET_USERINFO_FAILED:
      state.isLoading = false;
      state.error = payload;

      return { ...state };
    case ActionType.UPDATE_USERINFO_REQUEST:
      state.isLoading = true;
      state.error = null;

      return { ...state };
    case ActionType.UPDATE_USERINFO_SUCCESS:
      state.data = payload;
      state.isLoading = false;
      state.error = null;

      return { ...state };
    case ActionType.UPDATE_USERINFO_FAILED:
      state.isLoading = false;
      state.error = payload;

      return { ...state };
    case ActionType.CHANGEPASSWORD_REQUEST:
      state.isLoading = true;
      state.error = null;

      return { ...state };
    case ActionType.CHANGEPASSWORD_SUCCESS:
      state.data = payload;
      state.isLoading = false;
      state.error = null;

      return { ...state };
    case ActionType.CHANGEPASSWORD_FAILED:
      state.isLoading = false;
      state.error = payload;

      return { ...state };
    case ActionType.GET_2FACODE_REQUEST:
      state.isLoading = true;
      state.error2FaCode = null;

      return { ...state };
    case ActionType.GET_2FACODE_SUCCESS:
      state.TwoFaCode = payload;
      state.isLoading = false;
      state.error2FaCode = null;

      return { ...state };
    case ActionType.GET_2FACODE_FAILED:
      state.isLoading = false;
      state.error2FaCode = payload;

      return { ...state };
    case ActionType.UPDATE_2FACODE_REQUEST:
      state.isLoading = true;
      state.error2FaCode = null;

      return { ...state };
    case ActionType.UPDATE_2FACODE_SUCCESS:
      state.TwoFaCodeUpdated = payload;
      state.isLoading = false;
      state.error2FaCode = null;

      return { ...state };
    case ActionType.UPDATE_2FACODE_FAILED:
      state.isLoading = false;
      state.error2FaCode = payload;

      return { ...state };

    default:
      return state;
  }
};

export default userProfileReducer;
