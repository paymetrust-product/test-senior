function authorization(req, res, next) {
    // Vérification des autorisations de l'utilisateur
    // ...
  
    if (authorized) {
      // L'utilisateur est autorisé
      next();
    } else {
      res.status(403).json({ error: 'Forbidden' });
    }
  }
  
  module.exports = authorization;
  