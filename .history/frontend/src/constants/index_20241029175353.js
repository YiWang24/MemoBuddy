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
    REQUESTPASSWORDRESET: "/auth/request-password-reset",
    RESETPASSWORD: "/auth/reset-password",
  },
  USER: {
    PROFILE: "/user/profile",
    UPDATE: "/user/update",
  },
};
