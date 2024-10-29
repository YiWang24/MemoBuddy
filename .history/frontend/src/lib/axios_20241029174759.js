import axios from "axios";
const request = axios.create({
  baseURL: "http://localhost:8888/api/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
  if (error.response) {
    switch(error.response.status) {
      case 401:
        localStorage.removeItem("token");
        window.location.href = "/login";
        break;
    case 404:
        window.location.href = "/404";
        break;
      default:
        break;
    }
    
  }
);

export default request;
