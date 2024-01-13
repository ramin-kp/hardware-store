import axios from "axios";

const api = axios.create({ baseURL: import.meta.env.VITE_BASE_URL });

api.interceptors.request.use(
  (req) => {
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api;
