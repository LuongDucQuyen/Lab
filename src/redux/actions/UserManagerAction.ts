import * as ActionType from "../contants/UserContants";
import { TOKEN, USER_LOGIN } from "../../settings/config";
import { userManagerServices } from "../../services/api/apiUser";

// start login
export const actLoginAdmin = (infoLogin: any, history: any) => {
  return async (dispatch: any) => {
    dispatch(actLoginRequest());
    try {
      const result = await userManagerServices.loginServices(infoLogin);

      // Kiểm tra người dùng có phải là Quản trị hay không nếu không phải thì không cho đăng nhập
      const user = result.data.Data;
      const globalUser = result.data;
      // console.log("globalUser", globalUser);
      const statusCode = result.data.StatusCode;
      // console.log("actions statusCode", statusCode);
      if (statusCode && statusCode === 200) {
        dispatch(actLoginSuccess(globalUser));
        const tokenAsscess = `d2c17bb33877fc59149099e02f66d470bf86b5e37fe68560b211833933790cec`
        localStorage.setItem(USER_LOGIN, JSON.stringify(globalUser));
        localStorage.setItem(TOKEN, tokenAsscess);
        // localStorage.setItem(TOKEN, user.Token);
        // history.replace("/admin");
        // history.replace("/office/dashboard");
      } else {
        // Tạo lỗi
        // const error = {
        //   response: {
        //     data: {
        //       content: "Tài khoản hoặc mật khẩu không đúng!",
        //     },
        //   },
        // };

        dispatch(actLoginFailed(globalUser));
      }
    } catch (error) {
      dispatch(actLoginFailed(error));
    }
  };
};

export const actLoginRequest = () => ({
  type: ActionType.LOGIN_REQUEST,
});

export const actLoginSuccess = (userLogin: any) => ({
  type: ActionType.LOGIN_SUCCESS,
  payload: userLogin,
});

export const actLoginFailed = (error: any) => ({
  type: ActionType.LOGIN_FAILED,
  payload: error,
});

// end login
//========================================================================================

// start register
export const actUserRegister = (InfoRegister: any, history: any) => {
  return async (dispatch: any) => {
    dispatch(actRigisterRequest());

    try {
      const result = await userManagerServices.registerServices(InfoRegister);
      const statusCode = result.data.StatusCode;
      const globalRigister = result.data;

      if (statusCode && statusCode === 200) {
        dispatch(actRigisterSuccess(globalRigister));
        history.replace("/sign-in");
      } else {
        // Tạo lỗi
        // console.log("Loi roi nha!!!!");
      }
    } catch (error: any) {
      dispatch(actRigisterFailed(error.response));
      // console.log("Loi roi nha!!!!");
    }
  };
};

export const actRigisterRequest = () => ({
  type: ActionType.RIGISTER_REQUEST,
});

export const actRigisterSuccess = (userRigister: any) => ({
  type: ActionType.RIGISTER_SUCCESS,
  payload: userRigister,
});

export const actRigisterFailed = (error: any) => ({
  type: ActionType.RIGISTER_FAILED,
  payload: error,
});

// end register

//================================================================

// start Active Email
export const actUserRegisterActiveEmail = (InfoRegister: any) => {
  return async (dispatch: any) => {
    dispatch(actRigisterActiveEmaiRequest());
    const result = await userManagerServices.registerActiveEmail(InfoRegister);
    const statusCode = result.data.StatusCode;
    const globalRigister = result.data;

    if (statusCode && statusCode === 200) {
      dispatch(actRigisterActiveEmail(globalRigister));
    } else {
      // Tạo lỗi
      // console.log("Loi roi nha!!!!");
      dispatch(actRigisterActiveEmailFailed(globalRigister));
    }
  };
};

export const actRigisterActiveEmaiRequest = () => ({
  type: ActionType.RIGISTER_ATIVE_REQUEST,
});

export const actRigisterActiveEmail = (userActive: any) => ({
  type: ActionType.RIGISTER_ACTIVE,
  payload: userActive,
});

export const actRigisterActiveEmailFailed = (error: any) => ({
  type: ActionType.RIGISTER_ACTIVE_FAILED,
  payload: error,
});

// end Active Email

//=======================================================

// start LichSuDauTu

export const actUserLichSuDauTu = (InfoLichSu: any) => {
  return async (dispatch: any) => {
    const result = await userManagerServices.LichSuDauTu(InfoLichSu);
    const statusCode = result.data.StatusCode;
    const globalLichSu = result.data;

    if (statusCode && statusCode === 200) {
      dispatch(actLichSuDauTu(globalLichSu));
    } else {
      // Tạo lỗi
      // console.log("Loi roi nha!!!!");
      dispatch(actLichSuDauTu(globalLichSu));
    }
  };
};

export const actLichSuDauTu = (userActive: any) => ({
  type: ActionType.LICHSUDAUTU_SUCCESS,
  payload: userActive,
});

// end LichSuDauTu

//===========================================

// start LichSuGiaoDich

export const actUserLichSuGiaoDich = (InfoLichSu: any) => {
  return async (dispatch: any) => {
    const result = await userManagerServices.LichSuGiaoDich(InfoLichSu);
    const statusCode = result.data.StatusCode;
    const globalLichSu = result.data;

    if (statusCode && statusCode === 200) {
      dispatch(actLichSuGiaoDich(globalLichSu));
    } else {
      // Tạo lỗi
      // console.log("Loi roi nha!!!!");
      dispatch(actLichSuGiaoDich(globalLichSu));
    }
  };
};

export const actLichSuGiaoDich = (userActive: any) => ({
  type: ActionType.LICHSUGIAODICH_SUCCESS,
  payload: userActive,
});

// end LichSuGiaoDich

//===========================================

// start ProductSanPham

export const actUserProductSanPham = (InfoLichSu: any) => {
  return async (dispatch: any) => {
    const result = await userManagerServices.ProductSanPham(InfoLichSu);
    const statusCode = result.data.StatusCode;
    const globalLichSu = result.data;

    if (statusCode && statusCode === 200) {
      dispatch(actProductSanPham(globalLichSu));
    } else {
      // Tạo lỗi
      // console.log("Loi roi nha!!!!");
      dispatch(actProductSanPham(globalLichSu));
    }
  };
};

export const actProductSanPham = (userActive: any) => ({
  type: ActionType.PRODUCT_SP_SUCCESS,
  payload: userActive,
});

// end ProductSanPham

//===========================================

// start Affiliates
export const actGetLisAffiliates = () => {
  return async (dispatch: any) => {
    dispatch(actListAffilatesRequest());
    try {
      const result = await userManagerServices.getListAffiliated();

      const listUser = result.data.Data;
      // console.log(listUser)
      dispatch(actListAffiliatesSuccess(listUser));
    } catch (error) {
      dispatch(actListAffiliatesFailed(error));
    }
  };
};

export const actListAffilatesRequest = () => ({
  type: ActionType.LIST_AFFILIATED_REQUEST,
});

export const actListAffiliatesSuccess = (listAffiliates: any) => ({
  type: ActionType.LIST_AFFILIATED_SUCCESS,
  payload: listAffiliates,
});

export const actListAffiliatesFailed = (error: any) => ({
  type: ActionType.LIST_AFFILIATED_FAILED,
  payload: error,
});

// end Affiliates
//================================================

//start Product
export const actGetLisProducts = () => {
  return async (dispatch: any) => {
    dispatch(actListProductRequest());
    try {
      const result = await userManagerServices.getListProduct();

      const listUser = result.data.Data;
      // console.log(listUser);
      dispatch(actListProductSuccess(listUser));
    } catch (error) {
      dispatch(actListProductFailed(error));
    }
  };
};

export const actListProductRequest = () => ({
  type: ActionType.LIST_PRODUCT_REQUEST,
});

export const actListProductSuccess = (listProduct: any) => ({
  type: ActionType.LIST_PRODUCT_SUCCESS,
  payload: listProduct,
});

export const actListProductFailed = (error: any) => ({
  type: ActionType.LIST_PRODUCT_FAILED,
  payload: error,
});

//end Product

//start TransactionType_Gets
export const actGetListTrasactionType_Gets = () => {
  return async (dispatch: any) => {
    dispatch(actGetListTrasactionType_Request());
    try {
      const result = await userManagerServices.getListTrasactionType_Gets();

      const listUser = result.data.Data;
      // console.log(listUser);
      dispatch(actGetListTrasactionType_Success(listUser));
    } catch (error) {
      dispatch(actGetListTrasactionType_Failed(error));
    }
  };
};

export const actGetListTrasactionType_Request = () => ({
  type: ActionType.LIST_TRANSACTION_REQUEST,
});

export const actGetListTrasactionType_Success = (listProduct: any) => ({
  type: ActionType.LIST_TRANSACTION_SUCCESS,
  payload: listProduct,
});

export const actGetListTrasactionType_Failed = (error: any) => ({
  type: ActionType.LIST_TRANSACTION_FAILED,
  payload: error,
});

//end TransactionType_Gets

// start LichSuDauTu

export const actUserHistoryWithdraw = (InfoLichSu: any) => {
  return async (dispatch: any) => {
    const result = await userManagerServices.WithdrawRequest_History(InfoLichSu);
    const statusCode = result.data.StatusCode;
    const globalLichSu = result.data;

    if (statusCode && statusCode === 200) {
      dispatch(actHistoryWithdraw(globalLichSu));
    } else {
      // Tạo lỗi
      // console.log("Loi roi nha!!!!");
      dispatch(actHistoryWithdraw(globalLichSu));
    }
  };
};

export const actHistoryWithdraw = (userActive: any) => ({
  type: ActionType.LICHSUWITHDRAW_SUCCESS,
  payload: userActive,
});

// end LichSuDauTu

//===========================================

export const actHandleLogout = () => ({
  type: ActionType.LOGOUT,
});

export const actGetListUser = () => {
  return async (dispatch: any) => {
    dispatch(actListUserRequest());
    try {
      const result = await userManagerServices.getListUserServices();

      const listUser = result.data.content;
      dispatch(actListUserSuccess(listUser));
    } catch (error) {
      dispatch(actListUserFailed(error));
    }
  };
};

export const actListUserRequest = () => ({
  type: ActionType.LIST_USER_REQUEST,
});

export const actListUserSuccess = (listUser: any) => ({
  type: ActionType.LIST_USER_SUCCESS,
  payload: listUser,
});

export const actListUserFailed = (error: any) => ({
  type: ActionType.LIST_USER_FAILED,
  payload: error,
});

export const actGetLisDasboard = () => {
  return async (dispatch: any) => {
    dispatch(actListUserRequest());
    try {
      const result = await userManagerServices.getListDashboard();

      const listUser = result.data.Data;
      dispatch(actListUserSuccess(listUser));
    } catch (error) {
      dispatch(actListUserFailed(error));
    }
  };
};

// start: 27/8

// start Withdraw

export const actUserWithdraw = (InfoLichSu: any) => {
  return async (dispatch: any) => {
    const result = await userManagerServices.WithdrawRequest(InfoLichSu);
    const statusCode = result.data.StatusCode;
    const globalLichSu = result.data;

    if (statusCode && statusCode === 200) {
      dispatch(actWithdraw(globalLichSu));
    } else {
      // Tạo lỗi
      // console.log("Loi roi nha!!!!");
      dispatch(actWithdraw(globalLichSu));
    }
  };
};

export const actUserWithdraw_Submit = (InfoLichSu: any) => {
  return async (dispatch: any) => {
    const result = await userManagerServices.WithdrawRequest_Submit(InfoLichSu);
    const statusCode = result.data.StatusCode;
    const globalLichSu = result.data;

    if (statusCode && statusCode === 200) {
      dispatch(actWithdraw_Submit(globalLichSu));
    } else {
      // Tạo lỗi
      // console.log("Loi roi nha!!!!");
      dispatch(actWithdraw_Submit(globalLichSu));
    }
  };
};

export const actWithdraw = (userActive: any) => ({
  type: ActionType.LICHSUGIAODICH_SUCCESS,
  payload: userActive,
});

export const actWithdraw_Submit = (userActive: any) => ({
  type: ActionType.LICHSUGIAODICHSUBMIT_SUCCESS,
  payload: userActive,
});

// end Withdraw

//start get From wallet
export const actGetFromWallet = () => {
  return async (dispatch: any) => {
    // dispatch(actGetListTrasactionType_Request());
    try {
      const result = await userManagerServices.getFromWallet();

      const listUser = result.data.Data;
      // console.log(listUser);
      dispatch(actGetFromWallet_Success(listUser));
    } catch (error) {
      // dispatch(actGetListTrasactionType_Failed(error));
      // console.log("error", error);
    }
  };
};

export const actGetFromWallet_Success = (listProduct: any) => ({
  type: ActionType.LIST_FROMWALLET_SUCCESS,
  payload: listProduct,
});

// export const actGetListTrasactionType_Success = (listProduct: any) => ({
//   type: ActionType.LIST_TRANSACTION_SUCCESS,
//   payload: listProduct,
// });

// export const actGetListTrasactionType_Failed = (error: any) => ({
//   type: ActionType.LIST_TRANSACTION_FAILED,
//   payload: error,
// });

//end  get From wallet

// start balance

//start get From wallet
export const actGetBalance = () => {
  return async (dispatch: any) => {
    // dispatch(actGetListTrasactionType_Request());
    try {
      const result = await userManagerServices.getBlance();

      const listUser = result.data.Data;
      // console.log(listUser);
      dispatch(actGetBalance_Success(listUser));
    } catch (error) {
      // dispatch(actGetListTrasactionType_Failed(error));
      // console.log("error", error);
    }
  };
};

export const actGetBalance_Success = (listProduct: any) => ({
  type: ActionType.LIST_BALANCE_SUCCESS,
  payload: listProduct,
});

// end balance

// end: 27/8

//start get tranfer
export const actGetTranfer = () => {
  return async (dispatch: any) => {
    // dispatch(actGetListTrasactionType_Request());
    try {
      const result = await userManagerServices.getTranfer();

      const listUser = result.data.Data;
      // console.log(listUser);
      dispatch(actGetTranfer_Success(listUser));
    } catch (error) {
      // dispatch(actGetListTrasactionType_Failed(error));
      // console.log("error", error);
    }
  };
};

export const actGetTranfer_Success = (listProduct: any) => ({
  type: ActionType.LIST_TRANFER_SUCCESS,
  payload: listProduct,
});

export const actUserTranfer_Submit = (InfoLichSu: any) => {
  return async (dispatch: any) => {
    const result = await userManagerServices.TranferRequest_Submit(InfoLichSu);
    const statusCode = result.data.StatusCode;
    const globalLichSu = result.data;

    if (statusCode && statusCode === 200) {
      dispatch(actTranfer_Submit(globalLichSu));
    } else {
      // Tạo lỗi
      // console.log("Loi roi nha!!!!");
      dispatch(actTranfer_Submit(globalLichSu));
    }
  };
};

export const actTranfer_Submit = (userActive: any) => ({
  type: ActionType.TRANFERSUBMIT_SUCCESS,
  payload: userActive,
});

//end  get  tranfer

//start get tranfer
export const actGetDiposit = () => {
  return async (dispatch: any) => {
    // dispatch(actGetListTrasactionType_Request());
    try {
      const result = await userManagerServices.getDeposit();

      const listUser = result.data.Data;
      // console.log(listUser);
      dispatch(actGetDiposit_Success(listUser));
    } catch (error) {
      // dispatch(actGetListTrasactionType_Failed(error));
      // console.log("error", error);
    }
  };
};

export const actGetDiposit_Success = (listProduct: any) => ({
  type: ActionType.LIST_DIPOSITSUCCESS,
  payload: listProduct,
});

export const actUserDeposit_Submit = (InfoLichSu: any) => {
  return async (dispatch: any) => {
    const result = await userManagerServices.DepositSymbol(InfoLichSu);
    const statusCode = result.data.StatusCode;
    const globalLichSu = result.data;

    if (statusCode && statusCode === 200) {
      dispatch(actDeposit_Submit(globalLichSu));
    } else {
      // Tạo lỗi
      // console.log("Loi roi nha!!!!");
      dispatch(actDeposit_Submit(globalLichSu));
    }
  };
};

export const actDeposit_Submit = (userActive: any) => ({
  type: ActionType.DEPOSIT_SUCCESS,
  payload: userActive,
});

//end  get  tranfer

export const actUserSwap = (InfoSwap: any) => {
  return async (dispatch: any) => {
    const result = await userManagerServices.SwapRequest(InfoSwap);
    const statusCode = result.data.StatusCode;
    const globalLichSu = result.data;

    if (statusCode && statusCode === 200) {
      dispatch(actSwap(globalLichSu));
    } else {
      // Tạo lỗi
      // console.log("Loi roi nha!!!!");
      dispatch(actSwap(globalLichSu));
    }
  };
};

export const actSwap = (userActive: any) => ({
  type: ActionType.SWAP_SUCCESS,
  payload: userActive,
});
