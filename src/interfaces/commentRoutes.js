const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware.authenticateToken, commentController.createComment);

module.exports = router;
