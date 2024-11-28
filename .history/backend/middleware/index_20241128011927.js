const errorMiddleware = require("./errorMiddleware");
const authMiddleware = require("./authMiddleware");
const passportMiddleware = require("./passportMiddleware");
const sessionMiddleware = require("./sessionMiddleware");
const uploadMiddleware = require("./uploadMiddleware");

// Export all middleware
module.exports = {
  errorMiddleware,
  authMiddleware,
  passportMiddleware,
  sessionMiddleware,
  uploadMiddleware,
};
