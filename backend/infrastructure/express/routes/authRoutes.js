const express = require('express');
const authController = require('../infrastructure/express/controllers/authController');
const authenticationMiddleware = require('../infrastructure/express/middlewares/authentication');

const router = express.Router();

router.post('/signin', authController.signIn.bind(authController));
router.post('/signup', authController.signUp.bind(authController));

module.exports = router;
