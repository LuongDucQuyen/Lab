import Axios from "./useApi";

const fetchAllUserCloneHome = () => {
  return Axios.get(`/v1/statistic/users`);
};

const fetchAllUserHome = (offset: string, limit: string, cancelled: any) => {
  return Axios.get(`/v1/statistic/users?offset=${offset}&limit=${limit}`, {
    cancelToken: cancelled,
  });
};

export { fetchAllUserCloneHome, fetchAllUserHome };
