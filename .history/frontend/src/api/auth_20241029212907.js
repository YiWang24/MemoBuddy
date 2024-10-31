import request from "../lib/axios";
import { API_ROUTES } from "../constants/index";

export const authApi = {
  login: async (email, password) => {
    try {
      const response = await request.post(API_ROUTES.AUTH.LOGIN, {
        email,
        password,
      });
      return response.data;
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
      return response.data;
    } catch (error) {
      return { error: error.response.data };
    }
  },
    logout: async () => {
        try {
        const response = await request.post(API_ROUTES.AUTH.LOGOUT);
        return response.data;
        } catch (error) {
        return { error: error.response.data };
        }
    },
    
}; 