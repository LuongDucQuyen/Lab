import { Api } from "./baseApiServices";

class UserProfileService {
  getUserInfo = () => {
    return Api.get(`/api/user/get_userprofile`);
  };
  changePassword = (infoChangePassord: any) => {
    return Api.post(`/api/user/changepass`, infoChangePassord);
  };

  changeUserInfo = (userChangeInfo: any) => {
    return Api.post(`/api/user/updateprofile`, userChangeInfo);
  };
}

class TwoFaCodeService {
  getTwoFaCode = () => {
    return Api.get(`/api/user/twofacode/get`);
  };

  Update2FA = (TwoFaCodeInfo: any) => {
    return Api.post(`/api/user/twofacode/update`, TwoFaCodeInfo);
  };
}
export const twoFaCodeService = new TwoFaCodeService();
export const userProfileService = new UserProfileService();
