import Axios from "./useApi";

const fetchAllUserClone = () => {
  return Axios.get(`/v1/statistic/users`);
};

const fetchAllUser = (offset: string, limit: string, cancelled: any) => {
  return Axios.get(`/v1/statistic/users?offset=${offset}&limit=${limit}`, {
    cancelToken: cancelled,
  });
};

export { fetchAllUserClone, fetchAllUser };
