const express = require('express');
const articleController = require('../infrastructure/express/controllers/articleController');
const authenticationMiddleware = require('../infrastructure/express/middlewares/authentication');

const router = express.Router();

router.post('/', authenticationMiddleware, articleController.createArticle.bind(articleController));
router.get('/:articleId', articleController.getArticle.bind(articleController));
router.put('/:articleId', authenticationMiddleware, articleController.updateArticle.bind(articleController));
router.delete('/:articleId', authenticationMiddleware, articleController.deleteArticle.bind(articleController));

module.exports = router;
