function errorHandling(err, req, res, next) {
    // Gestion des erreurs de manière centralisée
    // ...
  
    res.status(500).json({ error: err.message });
  }
  
  module.exports = errorHandling;
  