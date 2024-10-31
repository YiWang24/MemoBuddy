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
    PASSWORD:{
      RESET_REQUEST: "/auth/request-password-reset",
      RESET: "/auth/reset-password",
    },
    GOOGLE:{
      LOGIN: "/auth/google",
      CALLBACK: "/auth/google/callback",
    }
    GOOGLE: "/auth/google",
    GOOGLECALLBACK: "/auth/google/callback",
  },
  CONTACT: "/contact",
  DIARY: {
    GET: "/diary",
    CREATE: "/diary",
    GETBYID: (id) => `/diary/${id}`,
    UPDATEBYID: (id) => `/diary/${id}`,
    DELETEBYID: (id) => `/diary/${id}`,
    LOCK: (id) => `/diary/${id}/lock`,
    UNLOCK: (id) => `/diary/${id}/unlock`,
  },
  WEATCHER: (lat, lon) => `/weather?lat=${lat}&lon=${lon}`,
};
