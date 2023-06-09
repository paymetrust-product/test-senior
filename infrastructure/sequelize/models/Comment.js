const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Comment = sequelize.define('Comment', {
  // Définition des attributs du modèle Comment
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Comment;
