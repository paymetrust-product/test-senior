function authentication(req, res, next) {
    // Vérification de l'authentification de l'utilisateur
    // ...
  
    if (authenticated) {
      // L'utilisateur est authentifié
      next();
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
  }
  
  module.exports = authentication;
  