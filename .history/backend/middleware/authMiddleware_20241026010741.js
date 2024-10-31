 function authMiddleware(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  if (req.xhr || req.accepts('json')) {
    return res.status(401).json({ message: 'Unauthorized' }); 
  } else {
    return res.redirect('/login'); 
  }
}

module.exports = authMiddleware;