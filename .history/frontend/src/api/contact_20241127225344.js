import request from "../lib/axios";
import { API_ROUTES } from "../constants/index";

export const contactApi = {
  sendContactMessage: (message) =>
    console.log()
    request.post(API_ROUTES.CONTACT, message),
};