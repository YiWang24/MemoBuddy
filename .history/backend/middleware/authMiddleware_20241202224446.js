// Purpose: Middleware to check if user is authenticated
function authMiddleware(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  if (req.xhr || req.accepts("json")) {
    return next(new Error("Unauthorized"));
  } else {
    return res.redirect("/login");
  }
}

module.exports = authMiddleware;
