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
  googleLogin: async (tokenId) => {
    try {
      const response = await request.post(API_ROUTES.AUTH.GOOGLE_LOGIN, {
        tokenId,
      });
      return response;
    } catch (error) {
      return { error: error.response.data };
    }
  },
  googleCallback: async (code) => {
    try {
      const response = await request.post(API_ROUTES.AUTH.GOOGLE_CALLBACK, {
        code,
      });
      return response;
    } catch (error) {
      return { error: error.response.data };
    }
  }
  logout: async () => {
    try {
      const response = await request.post(API_ROUTES.AUTH.LOGOUT);
      return response;
    } catch (error) {
      return { error: error.response.data };
    }
  },
};
