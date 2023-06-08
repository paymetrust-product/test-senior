const Comment = require('../models/Comment');
const sequelize = require('../database');

async function createComment(req, res, next) {
  const { content } = req.body;
  const author = req.user.username;
  const articleId = req.params.id;

  try {
    const comment = await sequelize.transaction(async (transaction) => {
      const createdComment = await Comment.create({ content, author, articleId }, { transaction });

      return createdComment;
    });

    res.status(201).json(comment);
  } catch (error) {
    next(error);
  }
}

async function deleteComment(req, res, next) {
  const { id } = req.params;

  try {
    const deleted = await Comment.destroy({ where: { id } });

    if (deleted === 0) {
      return res.sendStatus(404);
    }

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createComment,
  deleteComment,
};
