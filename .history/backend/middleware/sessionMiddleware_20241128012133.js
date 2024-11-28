const session = require("express-session");
const MongoStore = require("connect-mongo");
const config = require("../config/config");
// Create a session middleware with the given options
const sessionMiddleware = session({
  ...config.session,
  store: MongoStore.create({
    mongoUrl: config.db.url,
    ttl: 7 * 24 * 60 * 60, // 14 days
  }),
});

module.exports = sessionMiddleware;
