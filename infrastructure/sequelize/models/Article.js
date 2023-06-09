const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Article = sequelize.define('Article', {
  // Définition des attributs du modèle Article
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Article;
