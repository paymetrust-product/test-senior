const express = require('express');
const adminController = require('../infrastructure/express/controllers/adminController');
const authenticationMiddleware = require('../infrastructure/express/middlewares/authentication');
const authorizationMiddleware = require('../infrastructure/express/middlewares/authorization');

const router = express.Router();

router.post('/article', authenticationMiddleware, authorizationMiddleware, adminController.createArticle.bind(adminController));
router.put('/article', authenticationMiddleware, authorizationMiddleware, adminController.updateArticle.bind(adminController));
router.delete('/article/:articleId', authenticationMiddleware, authorizationMiddleware, adminController.deleteArticle.bind(adminController));
router.post('/user', authenticationMiddleware, authorizationMiddleware, adminController.createUser.bind(adminController));
router.put('/user', authenticationMiddleware, authorizationMiddleware, adminController.updateUser.bind(adminController));
router.delete('/user/:userId', authenticationMiddleware, authorizationMiddleware, adminController.deleteUser.bind(adminController));

module.exports = router;
