import request from "../lib/axios";
import { API_ROUTES } from "../constants/index";

export const authApi = {
  login: async (credentials) => {
    try {
      const response = await request.post(API_ROUTES.AUTH.LOGIN, credentials);
      return response;
    } catch (error) {
      return throw new Error();
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
      return throw new Error();
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
      return throw new Error();
    }
  },
  logout: async () => {
    try {
      const response = await request.post(API_ROUTES.AUTH.LOGOUT);
      return response;
    } catch (error) {
      return throw new Error();
    }
  },
  requestPasswordReset: async (email) => {
    try {
      console.log({email});
      const response = await request.post(
        API_ROUTES.AUTH.PASSWORD.RESET_REQUEST,
        {email}
      );
      return response;
    } catch (error) {
      return throw new Error();
    }
  },
};
