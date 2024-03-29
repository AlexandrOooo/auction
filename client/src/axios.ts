import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${window.localStorage.getItem(
    "token"
  )}`;
  config.headers["ngrok-skip-browser-warning"] = true;

  return config;
});

export default instance;
