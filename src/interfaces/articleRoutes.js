
const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', articleController.getAllArticles);
router.get('/:id', articleController.getArticleById);
router.post('/', authMiddleware.authenticateToken, articleController.createArticle);
router.put('/:id', authMiddleware.authenticateToken, articleController.updateArticle);
router.delete('/:id', authMiddleware.authenticateToken, articleController.deleteArticle);

module.exports = router;
