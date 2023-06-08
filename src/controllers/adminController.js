const Article = require('../models/Article');
const User = require('../models/User');

async function getAllArticles(req, res) {
  try {
    const articles = await Article.findAll();
    res.json(articles);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

async function getAllMembers(req, res) {
  try {
    const members = await User.findAll();
    res.json(members);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

async function getAllAdministrators(req, res) {
  try {
    const administrators = await User.findAll({ where: { isAdmin: true } });
    res.json(administrators);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

module.exports = {
  getAllArticles,
  getAllMembers,
  getAllAdministrators,
};
