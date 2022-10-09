import axios from "axios";

const instance = axios.create({
  baseURL: "http://real.karsoft.uz/api",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization =
    "Bearer " + "2|mlhhwZKn8t4ZHPbmmms4vPyASE4qsUQ30UnRV9hT"
  return config;
});

export default instance;
