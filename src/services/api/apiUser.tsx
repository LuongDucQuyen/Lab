import { GROUP_ID } from "../../settings/config";
import { Api } from "./baseApiServices";

class UserManagerServices {
  loginServices = (infoLogin: any) => {
    return Api.post(`/api/login`, infoLogin);
  };
  registerServices = (infoLogin: any) => {
    return Api.post(`/api/register`, infoLogin);
  };
  registerActiveEmail = (infoLogin: any) => {
    return Api.post(`/api/user/active-email`, infoLogin);
  };
  LichSuDauTu = (infoLichSu: any) => {
    return Api.post(`/api/user/investmenthistory`, infoLichSu);
  };
  LichSuGiaoDich = (infoLichSu: any) => {
    return Api.post(`/api/user/transactions`, infoLichSu);
  };

  // start 27/8 edricphan
  WithdrawRequest = (infoWithdraw: any) => {
    return Api.post(`/api/withdraw/send_request`, infoWithdraw);
  };

  WithdrawRequest_Submit = (infoWithdrawSubmit: any) => {
    return Api.post(`/api/withdraw/submit`, infoWithdrawSubmit);
  };

  WithdrawRequest_History = (infoWithdrawSubmit: any) => {
    return Api.post(`/api/withdraw/historys`, infoWithdrawSubmit);
  };
  //end 27/8

  // start 28/8 edricphan

  TranferRequest_Submit = (infoWithdrawSubmit: any) => {
    return Api.post(`/api/transfer/submit`, infoWithdrawSubmit);
  };

  DepositSymbol = (infoWithdrawSubmit: any) => {
    return Api.post(`/api/deposit/wallet`, infoWithdrawSubmit);
  };

  getDeposit = () => {
    return Api.get(`/api/transfer/submit`);
  };

  getTranfer = () => {
    return Api.get(`/api/transfer/getfromwallet`);
  };

  // end 28/8

  ProductSanPham = (infoProduct: any) => {
    return Api.post(`/api/user/investment`, infoProduct);
  };
  getListDashboard = () => {
    return Api.get(`/api/dashboard/get`);
  };
  getListAffiliated = () => {
    return Api.get(`/api/affiliate/statistic`);
  };

  getListProduct = () => {
    return Api.get(`/api/product_gets`);
  };

  getListTrasactionType_Gets = () => {
    return Api.get(`/api/TransactionType_Gets`);
  };

  // start 27/8
  getFromWallet = () => {
    return Api.get(`/api/withdraw/getfromwallet`);
  };

  getFromWallet_Sumbit = () => {
    return Api.get(`/api/withdraw/submit`);
  };

  getBlance = () => {
    return Api.get(`/api/user/balance`);
  };
  // end 27/8
  getListUserServices = () => {
    return Api.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`);
  };

  // 9/7
  SwapRequest = (infoSwap: any) => {
    return Api.post(`/api/swap`, infoSwap);
  };
}

export const userManagerServices = new UserManagerServices();

class UserManagerServicesPKT {
  loginServices = (infoLogin: any) => {
    return Api.post(`/api/QuanLyNguoiDung/DangNhap`, infoLogin);
  };
  getListUserServices = () => {
    return Api.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`);
  };
}

export const userManagerServicesPKT = new UserManagerServicesPKT();
