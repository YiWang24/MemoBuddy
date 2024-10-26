const errorMiddleware = require("./errorMiddleware");
const authMiddleware = require("./authMiddleware");
const passportMiddleware = require("./passportMiddleware");
const sessionMiddleware = require("./sessionMiddleware");
const uploadMiddleware = require("./uploadMiddleware");

module.exports = {
  errorMiddleware,
  isLogged,
  passportMiddleware,
  sessionMiddleware,
  uploadMiddleware,
};
