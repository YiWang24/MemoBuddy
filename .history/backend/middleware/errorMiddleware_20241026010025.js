function errorMiddleware(err, req, res, next) {
  console.error(err);
  if(err.message==="Unauthorized"){
    return res.status(401).json({ message: "Unauthorized" });
  } else if(err.message==="Forbidden"){
    return res.status(403).json({ message: "Forbidden" });
  } else if （err.message==="Not Found"）{
  return res.status(500).json({ message: "Something went wrong" });
  }
  
module.exports = errorMiddleware;
  