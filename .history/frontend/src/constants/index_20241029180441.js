import { google, email } from "../assets/icons/index";
export const SOCIAL_MEDIA = [
  { src: google, alt: "google Logo" },
  { src: email, alt: "email Logo" },
];

export const API_ROUTES = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    PASSWORD: {
      RESET_REQUEST: "/auth/request-password-reset",
      RESET: "/auth/reset-password",
    },
    GOOGLE: {
      LOGIN: "/auth/google",
      CALLBACK: "/auth/google/callback",
    },
  },
  CONTACT: "/contact",
  DIARY: {
    LIST: "/diary",
    CREATE: "/diary",
    GET: (id) => `/diary/${id}`,
    GETBYID: (id) => `/diary/${id}`,
    UPDATE: (id) => `/diary/${id}`,
    DELETE: (id) => `/diary/${id}`,
    ACTIONS: {
      LOCK: (id) => `/diary/${id}/lock`,
      UNLOCK: (id) => `/diary/${id}/unlock`,
    },
  },
  WEATCHER: {
    GET: (params) => `/weather?${new URLSearchParams(params)}`,
  },
};
