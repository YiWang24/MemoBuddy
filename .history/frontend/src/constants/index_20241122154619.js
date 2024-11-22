import { Verify } from "crypto";
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
      VERIFY: "/auth/verify-reset-code",
      RESET: "/auth/reset-password",
    },
    CHECKCURRENTUSER: "/auth/currentUser",
  },
  CONTACT: "/contact",
  DIARY: {
    LIST: "/diary",
    CREATE: "/diary",
    GET: (id) => `/diary/${id}`,
    UPDATE: (id) => `/diary/${id}`,
    DELETE: (id) => `/diary/${id}`,
    ACTIONS: {
      LOCK: (id) => `/diary/${id}/lock`,
      UNLOCK: (id) => `/diary/${id}/unlock`,
    },
  },
  WEATHER: {
    GET: (lat, lon) => `/weather/${lat}/${lon}`,
  },
};

export const STAGE_CONTENT = {
  email: {
    cardTitle: "Reset Password",
    buttonTitle: "Send Verification Code",
    cardBody: "No worries, We’ll send you reset instructions",
    cardFooter: "Already have an account?",
    link: "/login",
  },
  code: {
    cardTitle: "Check Your Email",
    buttonTitle: "Verify Code",
    cardBody: (email) =>
      `We sent a reset link to ${email}. Enter the 4-digit code mentioned in the email.`,
    cardFooter: "Haven’t got the email yet?",
    resendLinkText: "Resend Code",
  },
  password: {
    cardTitle: "Set a New Password",
    buttonTitle: "Confirm",
    cardBody:
      "Create a new password. Ensure it differs from previous ones for security",
    cardFooter: "",
  },
  success: {
    cardTitle: "Password Reset Successful",
    buttonTitle: "Return to Login",
    cardBody:
      "Your password has been reset successfully. Please login with your new password",
    cardFooter: "",
    link: "/login",
  },
};
