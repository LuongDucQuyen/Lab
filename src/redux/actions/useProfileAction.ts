import * as ActionType from "../contants/userProfileConstant";
import {
  userProfileService,
  twoFaCodeService,
} from "../../services/api/apiUserProfile";

//Get UserInfo
export const getUserProfile = () => {
  return async (dispatch: any) => {
    dispatch(actGetUserInfo);
    try {
      const result = await userProfileService.getUserInfo();

      const statusCode = result.data.StatusCode;
      const userData = result.data.Data;
      if (statusCode && statusCode === 200) {
        dispatch(actGetUserInfoSuccess(userData));
      } else {
        dispatch(actGetUserInfoFail(userData));
      }
    } catch (error: any) {
      dispatch(actGetUserInfoFail(error));
    }
  };
};

export const actGetUserInfo = () => ({
  type: ActionType.GET_USERINFO_REQUEST,
});

export const actGetUserInfoSuccess = (infoUserData: any) => ({
  type: ActionType.GET_USERINFO_SUCCESS,
  payload: infoUserData,
});

export const actGetUserInfoFail = (error: any) => ({
  type: ActionType.GET_USERINFO_FAILED,
  payload: error,
});

//change UserInfo
export const changeUserInfo = (infoChangeUser: any) => {
  return async (dispatch: any) => {
    dispatch(actRequestChangeInfo());
    try {
      const result = await userProfileService.changeUserInfo(infoChangeUser);

      const data = result.data;
      const statusCode = result.data.StatusCode;
      if (statusCode && statusCode === 200) {
        dispatch(actChangeInfoSuccess(data));
      } else {
        dispatch(actChangeInfoFail(data));
      }
    } catch (error: any) {
      dispatch(actChangeInfoFail(error));
    }
  };
};

export const actRequestChangeInfo = () => ({
  type: ActionType.UPDATE_USERINFO_REQUEST,
});

export const actChangeInfoFail = (error: any) => ({
  type: ActionType.UPDATE_USERINFO_FAILED,
  payload: error,
});

export const actChangeInfoSuccess = (data: any) => ({
  type: ActionType.UPDATE_USERINFO_SUCCESS,
  payload: data,
});

//change Password
export const changeUserPassword = (passwordChange: any) => {
  return async (dispatch: any) => {
    dispatch(actRequestChangePassword());
    try {
      const result = await userProfileService.changePassword(passwordChange);

      const data = result.data;
      const statusCode = result.data.StatusCode;
      if (statusCode && statusCode === 200) {
        dispatch(actChangePasswordSuccess(data));
      } else {
        dispatch(actChangePasswordFail(data));
      }
    } catch (error: any) {
      dispatch(actChangeInfoFail(error));
    }
  };
};

export const actRequestChangePassword = () => ({
  type: ActionType.CHANGEPASSWORD_REQUEST,
});

export const actChangePasswordFail = (error: any) => ({
  type: ActionType.CHANGEPASSWORD_FAILED,
  payload: error,
});

export const actChangePasswordSuccess = (dataPassword: any) => ({
  type: ActionType.CHANGEPASSWORD_SUCCESS,
  payload: dataPassword,
});

//Get 2FaCode
export const get2TwoFaCode = () => {
  return async (dispatch: any) => {
    dispatch(actGet2FaCode());
    try {
      const result = await twoFaCodeService.getTwoFaCode();

      const data = result.data;
      const statusCode = result.data.StatusCode;
      if (statusCode && statusCode === 200) {
        dispatch(actGet2FaCodeSuccess(data));
      } else {
        dispatch(actGet2FaCodeFail(data));
      }
    } catch (error: any) {
      dispatch(actGet2FaCodeFail(error));
    }
  };
};

export const actGet2FaCode = () => ({
  type: ActionType.GET_2FACODE_REQUEST,
});

export const actGet2FaCodeSuccess = (TwoFaCodeData: any) => ({
  type: ActionType.GET_2FACODE_SUCCESS,
  payload: TwoFaCodeData,
});


export const actGet2FaCodeFail = (error: any) => ({
  type: ActionType.GET_USERINFO_FAILED,
  payload: error,
});

//Update 2FaCode
export const updateTwoFaCode = (ActiceInfo: any) => {
  return async (dispatch: any) => {
    dispatch(actUpdate2FaCode());
    try {
      const result = await twoFaCodeService.Update2FA(ActiceInfo);

      const data = result.data;
      const statusCode = result.data.StatusCode;
      if (statusCode && statusCode === 200) {
        dispatch(actUpdate2FaCodeSuccess(data));
      } else {
        dispatch(actUpdate2FaCodeFail(data));
      }
    } catch (error: any) {
      dispatch(actUpdate2FaCodeFail(error));
    }
  };
};

export const actUpdate2FaCode = () => ({
  type: ActionType.UPDATE_2FACODE_REQUEST,
});

export const actUpdate2FaCodeSuccess = (ActiceInfo: any) => ({
  type: ActionType.UPDATE_2FACODE_SUCCESS,
  payload: ActiceInfo,
});


export const actUpdate2FaCodeFail = (error: any) => ({
  type: ActionType.UPDATE_2FACODE_FAILED,
  payload: error,
});
