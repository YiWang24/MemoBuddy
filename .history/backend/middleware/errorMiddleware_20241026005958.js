function errorMiddleware(err, req, res, next) {
  console.error(err);
  if(err.message==)
  return res.status(500).json({ message: "Something went wrong" });
  }
  
module.exports = errorMiddleware;
  