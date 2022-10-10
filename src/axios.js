import axios from "axios";

const instance = axios.create({
  baseURL: "https://rivojyulduz.karsoft.uz/api",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization =
    "Bearer " + window.localStorage.getItem('token');
  return config;
});

export default instance;
