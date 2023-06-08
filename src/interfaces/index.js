
const express = require('express');
const router = express.Router();
const articleRoutes = require('./articleRoutes');
const commentRoutes = require('./commentRoutes');
const authRoutes = require('./authRoutes');
const adminRoutes = require('./adminRoutes');

router.use('/articles', articleRoutes);
router.use('/comments', commentRoutes);
router.use('/auth', authRoutes);
router.use('/admin', adminRoutes);

module.exports = router;
