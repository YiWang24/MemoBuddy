import request from "../lib/axios";
import { API_ROUTES } from "../constants/index";

export const contactApi = {
    sendContactMessage: (message) =>
        request.post(API_ROUTES.CONTACT.SEND_MESSAGE, message),
    };
}