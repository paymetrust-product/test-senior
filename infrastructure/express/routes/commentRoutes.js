const express = require('express');
const commentController = require('../infrastructure/express/controllers/commentController');
const authenticationMiddleware = require('../infrastructure/express/middlewares/authentication');

const router = express.Router();

router.post('/', authenticationMiddleware, commentController.createComment.bind(commentController));
router.get('/:commentId', commentController.getComment.bind(commentController));
router.put('/:commentId', authenticationMiddleware, commentController.updateComment.bind(commentController));
router.delete('/:commentId', authenticationMiddleware, commentController.deleteComment.bind(commentController));

module.exports = router;
