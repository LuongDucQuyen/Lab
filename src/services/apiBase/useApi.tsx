import axios from "axios";

const TOKEN = process.env.REACT_APP_TEST_TOKEN ?? "";
const testAPI = process.env.REACT_APP_TEST_URL ?? "";

const instance = axios.create({
  baseURL: testAPI,
  headers: { "accept-key": TOKEN },
  params: { currency: "GAE" },
});

instance.interceptors.response.use(
  function (response) {
    return response && response.data ? response.data : response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
