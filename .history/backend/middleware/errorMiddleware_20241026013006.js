const STATUS_CODES = {
  "All fields are required": 400,
  "Diary is not locked": 400,
  Unauthorized: 401,
  Forbidden: 403,
  "Diary Not Found": 404,
  "User Not Found": 404
  "Email already exists": 409,
  "Internal Server Error": 500,
};

function errorMiddleware(err, req, res, next) {
  console.error(err);

  const statusCode = STATUS_CODES[err.message] || 500;
  const message = statusCode === 500 ? "Something went wrong" : err.message;

  return res.status(statusCode).json({ message });
}

module.exports = errorMiddleware;
