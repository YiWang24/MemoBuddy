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
  googleLogin: async () => {
    window.location.href = "http://localhost:8888/api/auth/google";
  },
  googleCallback: async () => {
    try {
      const response = await request.get(API_ROUTES.AUTH.GOOGLE.CALLBACK);
      return response;
    } catch (error) {
      return { error: error.response.data };
    }
  },
  register: async (email, password) => {
    try {
      const response = await request.post(API_ROUTES.AUTH.REGISTER, {
        email,
        password,
      });
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
};
