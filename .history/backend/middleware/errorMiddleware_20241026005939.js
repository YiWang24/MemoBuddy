function errorMiddleware(error, req, res, next) {
  console.error(error);
  
  return res.status(500).json({ message: "Something went wrong" });
  }
  
module.exports = errorMiddleware;
  