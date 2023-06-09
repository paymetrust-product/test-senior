const express = require('express');
const config = require('./config');
const routes = require('./infrastructure/express/routes');
const errorHandler = require('./infrastructure/express/errorHandler');

const app = express();

// Configuration des middlewares
// ...

// Configuration des routes
app.use(routes);

// Gestion des erreurs
app.use(errorHandler);

// Démarrage du serveur
const server = app.listen(config.port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${config.port}`);
});

module.exports = server;