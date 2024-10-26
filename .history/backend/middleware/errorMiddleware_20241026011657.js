const ERROR_MESSAGES = {
    ALL_FIELDS_REQUIRED: "All fields are required",
    UNAUTHORIZED: "Unauthorized",
    FORBIDDEN: "Forbidden",
    DIARY_NOT_FOUND: "Diary not found",
    INTERNAL_SERVER_ERROR: "Internal Server Error",
    DEFAULT: "Something went wrong"
  };
  

  function errorMiddleware(err, req, res, next) {
    console.error(err);
  
    switch (err.message) {
      case ERROR_MESSAGES.ALL_FIELDS_REQUIRED:
        return res.status(400).json({ message: ERROR_MESSAGES.ALL_FIELDS_REQUIRED });
      case ERROR_MESSAGES.UNAUTHORIZED:
        return res.status(401).json({ message: ERROR_MESSAGES.UNAUTHORIZED });
      case ERROR_MESSAGES.FORBIDDEN:
        return res.status(403).json({ message: ERROR_MESSAGES.FORBIDDEN });
      case ERROR_MESSAGES.DIARY_NOT_FOUND:
        return res.status(404).json({ message: ERROR_MESSAGES.DIARY_NOT_FOUND });
      case ERROR_MESSAGES.INTERNAL_SERVER_ERROR:
        return res.status(500).json({ message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
      default:
        return res.status(500).json({ message: ERROR_MESSAGES.DEFAULT });
    }
  }
  

module.exports = errorMiddleware;
