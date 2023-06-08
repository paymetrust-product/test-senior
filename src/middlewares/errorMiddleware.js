function errorHandler(err, req, res, next) {
    console.error(err);
  
    if (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ error: 'Duplicate entry' });
    }
  
    res.status(500).json({ error: 'Internal server error' });
  }
  
  module.exports = {
    errorHandler,
  };
  