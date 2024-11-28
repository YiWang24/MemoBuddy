if (process.env.NODE_ENV !== "production") {
  require("dotenv").config(); //Load environment variables from .env
}

/**
 * this file contains the configuration for the application
 * config.app: contains the configuration for the application
 * config.db: contains the configuration for the database
 * config.session: contains the configuration for the session
 * config.google: contains the configuration for the google authentication
 * config.email: contains the configuration for the email
 * config.swaggerDefinition: contains the configuration for the swagger
 * config.openWeatherMap: contains the configuration for the openWeatherMap
 * config.cors: contains the configuration for the cors
 * @type {Object}
 * @const {Object} config
 *
 */
const config = {
  app: {
    name: "MemoBuddy",
    port: parseInt(process.env.PORT) || 8888,
    apiPrefix: "/api",
  },
  db: {
    url: process.env.MONGODB_URI || "mongodb://localhost:27017/MemoBuddy",
  },
  session: {
    secret: process.env.SESSION_SECRET || "MemoBuddy-secret-key",
    name: "session",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    },
    rolling: true,
  },
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL || "/api/auth/google/callback",
    redirectUri: process.env.GOOGLE_REDIRECT_URI,
  },
  email: {
    smtp: {
      service: process.env.SMTP_SERVICE || "gmail",
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE || true,
      auth: {
        type: process.env.SMTP_AUTH_TYPE || "OAuth2",
        user: process.env.SMTP_AUTH_USER || "memobuddy2024@gmail.com",
      },
    },
    from: {
      name: process.env.EMAIL_FROM_NAME || "MemoBuddy",
      email: process.env.EMAIL_FROM_ADDRESS || "memobuddy2024@gmail.com",
    },
    admin: {
      email: process.env.ADMIN_EMAIL || "memobuddy2024@gmail.com",
    },
  },
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "MemoBuddy API",
      version: "1.1.0",
      description: "API Documentation for MemoBuddy Application",
      license: {
        name: "Licensed Under MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "MemoBuddy",
        email: "memobuddy2024@gmail.com",
      },
    },
    servers: [
      {
        url: `http://localhost:8888`,
        description: "Development server",
      },
    ],
  },
  openWeatherMap: {
    apiKey: process.env.WEATHER_API_KEY || "YOUR_API_KEY_HERE",
  },
  cors: {
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  },
};

module.exports = config;
