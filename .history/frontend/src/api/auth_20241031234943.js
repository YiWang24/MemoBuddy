import request from "../lib/axios";
import { API_ROUTES } from "../constants/index";

export const authApi = {
  login: async (credentials) => {
    try {
      const response = await request.post(API_ROUTES.AUTH.LOGIN, credentials);
      return response;
    } catch (error) {
      return { error: error.response.data };
    }
  },
  register: async (credentials) => {
    try {
      const response = await request.post(
        API_ROUTES.AUTH.REGISTER,
        credentials
      );
      return response;
    } catch (error) {
      return { error: error.response.data };
    }
  },
  googleLogin: () => {
    window.location.href = "http://localhost:8888/api/auth/google";
  },
  checkCurrentUser: async (queryString) => {
    try {
      const response = await request.post(
        API_ROUTES.AUTH.CHECKCURRENTUSER,
        queryString
      );
      return response;
    } catch (error) {
      return { error: error.response.data };
    }
  },
  logout: async () => {
    try {
      const response = await request.post(API_ROUTES.AUTH.LOGOUT);
      return response;
    } catch (error) {
      return { error: error.response.data };
    }
  },
  requestPasswordReset: async (email) => {
    try {
      const response = await request.post(
        API_ROUTES.AUTH.PASSWORD.,
        email
      );
      return response;
    } catch (error) {
      return { error: error.response.data };
    }
  },
};
