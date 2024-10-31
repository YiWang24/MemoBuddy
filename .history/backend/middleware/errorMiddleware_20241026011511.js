function errorMiddleware(err, req, res, next) {
  console.error(err);
  if (err.message === "All fields are required") {
    return res.status(400).json({ message: "All fields are required" });
  } else if (err.message === "Unauthorized") {
    return res.status(401).json({ message: "Unauthorized" });
  } else if (err.message === "Forbidden") {
    return res.status(403).json({ message: "Forbidden" });
  } else if (err.message === "Diary Not Found") {
    return res.status(404).json({ message: "Diary not found" });
  } else if (err.message === "Bad Request") {
    return res.status(400).json({ message: "Bad Request" });
  } else if (err.message === "Internal Server Error") {
    return res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(500).json({ message: "Something went wrong" });
}

module.exports = errorMiddleware;