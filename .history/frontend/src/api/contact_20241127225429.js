import request from "../lib/axios";
import { API_ROUTES } from "../constants/index";

export const contactApi = {
  sendContactMessage: async (message) =>  {
    console.log(message);
    return await request.post(API_ROUTES.CONTACT, message);
  },
};
