// authApi.js
import request from "../lib/axios";
import { API_ROUTES } from "../constants/index";

export const authApi = {
  login: (credentials) => request.post(API_ROUTES.AUTH.LOGIN, credentials),
  register: (credentials) => request.post(API_ROUTES.AUTH.REGISTER, credentials),
  googleLogin: () => {
    window.location.href = "http://localhost:8888/api/auth/google";
  },
  checkCurrentUser: (queryString) => request.post(API_ROUTES.AUTH.CHECKCURRENTUSER, queryString),
  logout: () => request.post(API_ROUTES.AUTH.LOGOUT),
  requestPasswordReset: (email) => request.post(API_ROUTES.AUTH.PASSWORD.RESET_REQUEST, { email }),
};
