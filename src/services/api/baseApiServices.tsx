import axios from "axios";
import { DOMAIN, TOKEN_SUCCESS, PKT_TOKEN } from "../../settings/config";

const DOMAIN_PKT = "https://api.pktgroup.org";

const Api = axios.create({
  baseURL: DOMAIN_PKT,
});

Api.interceptors.request.use(
  function (config) {
    const toKenUser = localStorage.getItem(PKT_TOKEN)!!;

    config.headers = {
      ...config.headers,
      "PKT-User-Token": toKenUser,
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export { Api };
