const Comment = require('../models/Comment');

async function createComment(req, res) {
  const { content } = req.body;
  const author = req.user.username;

  try {
    const comment = await Comment.create({ content, author });
    res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

module.exports = {
  createComment,
};
