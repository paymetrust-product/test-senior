
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/articles', authMiddleware.authenticateToken, adminController.getAllArticles);
router.get('/members', authMiddleware.authenticateToken, adminController.getAllMembers);
router.get('/administrators', authMiddleware.authenticateToken, adminController.getAllAdministrators);

module.exports = router;
