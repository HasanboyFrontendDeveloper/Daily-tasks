import axios from "axios";
import { getItem } from "../helpers/localstorage";

axios.defaults.baseURL = "http://u14009.xvest4.ru/api/";

axios.interceptors.request.use((config) => {
  const token = getItem("token");
  const authorization = token ? `Token ${token}` : "";
  config.headers.Authorization = authorization;
  return config;
});

export default axios;