import * as ActionType from "../contants/UserContants";
import { TOKEN, USER_LOGIN, PKT_TOKEN } from "../../settings/config";

let userLogin = null;
if (localStorage.getItem(USER_LOGIN)) {
  userLogin = JSON.parse(localStorage.getItem(USER_LOGIN)!!);
}

const tokenAsscess = `d2c17bb33877fc59149099e02f66d470bf86b5e37fe68560b211833933790cec`;
localStorage.setItem(TOKEN, tokenAsscess);

const initialState = {
  listUser: null,
  error: null,
  isLoading: false,
  userLogin,
  errorLogin: null,
  infoUserEdit: null,
  infoAccount: null,
  userRigister: null,
  userRigisterActiveEmail: null,
  userLichSu: null,
  userLichSuWithdraw: null,
  userLichSuGiaoDich: null,
  userLichSuGiaoDichSubmit: null,
  usertranferSubmit: null,
  userDeposit: null,
  userSwap: null,
  userWithdraw: null,
  listAffiliates: null,
  listProduct: null,
  listTransaction: null,
  listFromWallet: null,
  listTranfer: null,
  listDiposit: null,
  listBalance: null,
  userProductSanPham: null,
};
const userManagementReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case ActionType.LIST_USER_REQUEST:
      state.listUser = payload;
      state.isLoading = true;
      state.error = null;

      return { ...state };

    case ActionType.LIST_USER_SUCCESS:
      state.listUser = payload;
      state.isLoading = false;
      state.error = null;

      return { ...state };

    case ActionType.LIST_USER_FAILED:
      state.listUser = null;
      state.isLoading = false;
      state.error = payload;

      localStorage.removeItem(USER_LOGIN);
      localStorage.removeItem(PKT_TOKEN);

      return { ...state };

    case ActionType.LOGIN_REQUEST:
      state.userLogin = null;
      state.isLoading = true;
      state.errorLogin = null;

      return { ...state };

    case ActionType.LOGIN_FAILED:
      state.userLogin = null;
      state.isLoading = false;
      state.errorLogin = payload;

      return { ...state };

    case ActionType.LOGIN_SUCCESS:
      state.userLogin = payload;
      state.isLoading = false;
      state.errorLogin = null;

      return { ...state };
    // start rigister
    case ActionType.RIGISTER_REQUEST:
      state.isLoading = true;
      state.userRigister = payload;
      state.error = null;

      return { ...state };

    case ActionType.RIGISTER_SUCCESS:
      state.userRigister = payload;
      state.isLoading = false;
      state.error = null;

      return { ...state };

    case ActionType.RIGISTER_FAILED:
      state.userLogin = null;
      state.isLoading = false;
      state.error = payload;

      return { ...state };
    // end rigister

    // start active email

    case ActionType.RIGISTER_ATIVE_REQUEST:
      state.isLoading = true;
      state.userRigisterActiveEmail = payload;
      state.error = null;

      return { ...state };

    case ActionType.RIGISTER_ACTIVE:
      state.userRigisterActiveEmail = payload;
      state.isLoading = false;
      state.error = null;

      return { ...state };

    case ActionType.RIGISTER_ACTIVE_FAILED:
      state.userLogin = null;
      state.isLoading = false;
      state.error = payload;

      return { ...state };

    // end active email

    // start lich su dau tu
    case ActionType.LICHSUDAUTU_SUCCESS:
      state.userLichSu = payload;
      state.isLoading = false;
      state.error = null;

      return { ...state };
    // end lich su dau tu

    // start lich su withdraw
    case ActionType.LICHSUWITHDRAW_SUCCESS:
      state.userLichSuWithdraw = payload;
      state.isLoading = false;
      state.error = null;

      return { ...state };
    // end lich su withdraw

    // start lich su giao dich
    case ActionType.LICHSUGIAODICH_SUCCESS:
      state.userLichSuGiaoDich = payload;
      state.isLoading = false;
      state.error = null;

      return { ...state };
    case ActionType.LICHSUGIAODICHSUBMIT_SUCCESS:
      state.userLichSuGiaoDichSubmit = payload;
      state.isLoading = false;
      state.error = null;

      return { ...state };
    // end lich su giao dich

    // start withdraw
    case ActionType.WITHDRAW_SUCCESS:
      state.userWithdraw = payload;
      state.isLoading = false;
      state.error = null;

      return { ...state };
    // end withdraw

    // start product san pham
    case ActionType.PRODUCT_SP_SUCCESS:
      state.userProductSanPham = payload;
      state.isLoading = false;
      state.error = null;

      return { ...state };
    // end product san pham

    // start affiliates
    case ActionType.LIST_AFFILIATED_REQUEST:
      state.listUser = payload;
      state.isLoading = true;
      state.error = null;

      return { ...state };

    case ActionType.LIST_AFFILIATED_SUCCESS:
      state.listAffiliates = payload;
      state.isLoading = false;
      state.error = null;

      return { ...state };

    case ActionType.LIST_AFFILIATED_FAILED:
      state.listAffiliates = null;
      state.isLoading = false;
      state.error = payload;

      return { ...state };

    // end affiliates

    // start PRODUCTS
    case ActionType.LIST_PRODUCT_REQUEST:
      state.listProduct = payload;
      state.isLoading = true;
      state.error = null;

      return { ...state };

    case ActionType.LIST_PRODUCT_SUCCESS:
      state.listProduct = payload;
      state.isLoading = false;
      state.error = null;

      return { ...state };

    case ActionType.LIST_PRODUCT_FAILED:
      state.listProduct = null;
      state.isLoading = false;
      state.error = payload;

      return { ...state };

    // end PRODUCTS

    // start transaction
    case ActionType.LIST_TRANSACTION_REQUEST:
      state.listTransaction = payload;
      state.isLoading = true;
      state.error = null;

      return { ...state };

    case ActionType.LIST_TRANSACTION_SUCCESS:
      state.listTransaction = payload;
      state.isLoading = false;
      state.error = null;

      return { ...state };

    case ActionType.LIST_TRANSACTION_FAILED:
      state.listTransaction = null;
      state.isLoading = false;
      state.error = payload;

      return { ...state };

    // end transaction

    // start from wallet
    //  case ActionType.LIST_TRANSACTION_REQUEST:
    //   state.listTransaction = payload;
    //   state.isLoading = true;
    //   state.error = null;

    //   return { ...state };

    case ActionType.LIST_FROMWALLET_SUCCESS:
      state.listFromWallet = payload;
      state.isLoading = false;
      state.error = null;

      return { ...state };

    // case ActionType.LIST_TRANSACTION_FAILED:
    //   state.listTransaction = null;
    //   state.isLoading = false;
    //   state.error = payload;

    //   return { ...state };

    // end from wallet

    // start TRANFER

    case ActionType.LIST_TRANFER_SUCCESS:
      state.listTranfer = payload;
      state.isLoading = false;
      state.error = null;

      return { ...state };

    case ActionType.TRANFERSUBMIT_SUCCESS:
      state.usertranferSubmit = payload;
      state.isLoading = false;
      state.error = null;

      return { ...state };

    // end  TRANFER

    // start DIPOSIT

    case ActionType.LIST_DIPOSITSUCCESS:
      state.listDiposit = payload;
      state.isLoading = false;
      state.error = null;

      return { ...state };

    case ActionType.DEPOSIT_SUCCESS:
      state.userDeposit = payload;
      state.isLoading = false;
      state.error = null;

      return { ...state };

    // end  DIPOSIT

    // swap
    case ActionType.SWAP_SUCCESS:
      state.userSwap = payload;
      state.isLoading = false;
      state.error = null;

      return { ...state };

    // start from balance
    //  case ActionType.LIST_TRANSACTION_REQUEST:
    //   state.listTransaction = payload;
    //   state.isLoading = true;
    //   state.error = null;

    //   return { ...state };

    case ActionType.LIST_BALANCE_SUCCESS:
      state.listBalance = payload;
      state.isLoading = false;
      state.error = null;

      return { ...state };

    // case ActionType.LIST_TRANSACTION_FAILED:
    //   state.listTransaction = null;
    //   state.isLoading = false;
    //   state.error = payload;

    //   return { ...state };

    // end from balance

    case ActionType.LOGOUT:
      state.userLogin = null;
      state.infoUserEdit = null;
      state.infoAccount = null;

      localStorage.removeItem(USER_LOGIN);
      localStorage.removeItem(PKT_TOKEN);
      return { ...state };

    case ActionType.INFO_USER_REQUEST:
      state.infoUserEdit = null;
      state.error = null;
      state.isLoading = true;
      return { ...state };

    case ActionType.INFO_USER_FAILED:
      state.infoUserEdit = null;
      state.error = payload;
      state.isLoading = false;
      return { ...state };

    case ActionType.INFO_USER_SUCCESS:
      state.infoUserEdit = payload;
      state.error = null;
      state.isLoading = false;

      return { ...state };

    case ActionType.INFO_ACCOUNT_REQUEST:
      state.infoAccount = null;
      state.error = null;
      state.isLoading = true;
      return { ...state };
    case ActionType.INFO_ACCOUNT_SUCCESS:
      state.infoAccount = payload;
      state.error = null;
      state.isLoading = false;
      return { ...state };
    case ActionType.INFO_ACCOUNT_FAILED:
      state.infoAccount = null;
      state.error = payload;
      state.isLoading = false;
      return { ...state };
    case ActionType.REGISTER_ACTION_FAILED:
      state.error = payload;

      return { ...state };
    default:
      return state;
  }
};

export default userManagementReducer;
