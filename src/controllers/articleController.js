const { Op } = require('sequelize');
const Article = require('../models/Article');
const Comment = require('../models/Comment');
const sequelize = require('../database');
const logger = require('../utils/logger');

async function getAllArticles(req, res, next) {
  try {
    const articles = await Article.findAll();
    res.json(articles);
  } catch (error) {
    logger.error(error);
    next(error);
  }
}

async function getArticleById(req, res, next) {
  const { id } = req.params;

  try {
    const article = await Article.findByPk(id);
    if (!article) {
      return res.sendStatus(404);
    }

    const comments = await Comment.findAll({ where: { articleId: id } });

    res.json({ article, comments });
  } catch (error) {
    logger.error(error);
    next(error);
  }
}

async function createArticle(req, res, next) {
  const { title, content } = req.body;
  const author = req.user.username;

  try {
    const article = await sequelize.transaction(async (transaction) => {
      const createdArticle = await Article.create({ title, content, author }, { transaction });

      return createdArticle;
    });

    res.status(201).json(article);
  } catch (error) {
    logger.error(error);
    next(error);
  }
}

async function updateArticle(req, res, next) {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const [updated] = await Article.update({ title, content }, { where: { id } });

    if (updated === 0) {
      return res.sendStatus(404);
    }

    const updatedArticle = await Article.findByPk(id);
    res.json(updatedArticle);
  } catch (error) {
    logger.error(error);
    next(error);
  }
}

async function deleteArticle(req, res, next) {
  const { id } = req.params;

  try {
    const deleted = await Article.destroy({ where: { id } });

    if (deleted === 0) {
      return res.sendStatus(404);
    }

    res.sendStatus(204);
  } catch (error) {
    logger.error(error);
    next(error);
  }
}

module.exports = {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
};
