const Article = require('../models/Article');

async function getAllArticles(req, res) {
  try {
    const articles = await Article.findAll();
    res.json(articles);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

async function getArticleById(req, res) {
  const { id } = req.params;

  try {
    const article = await Article.findByPk(id);
    if (!article) {
      return res.sendStatus(404);
    }

    res.json(article);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

async function createArticle(req, res) {
  const { title, content } = req.body;
  const author = req.user.username;

  try {
    const article = await Article.create({ title, content, author });
    res.status(201).json(article);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

async function updateArticle(req, res) {
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
    console.error(error);
    res.sendStatus(500);
  }
}

async function deleteArticle(req, res) {
  const { id } = req.params;

  try {
    const deleted = await Article.destroy({ where: { id } });

    if (deleted === 0) {
      return res.sendStatus(404);
    }

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

module.exports = {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
};
