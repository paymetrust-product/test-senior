const winston = require('winston');

const logger = winston.createLogger({
  // Configuration du logger
  // ...
});

function logging(req, res, next) {
  // Enregistrement des journaux
  // ...

  logger.info('Request received:', { url: req.url, method: req.method });
  next();
}

module.exports = logging;
