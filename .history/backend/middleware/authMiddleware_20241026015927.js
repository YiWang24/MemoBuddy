 function authMiddleware(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  if (req.xhr || req.accepts('json')) {
    return next(new Error('User is not authenticated'));
  } else {
    return res.redirect('/login'); 
  }
}

module.exports = authMiddleware;