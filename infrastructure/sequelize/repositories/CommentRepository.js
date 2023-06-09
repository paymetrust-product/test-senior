const Comment = require('../models/Comment');

class CommentRepository {
  async createComment(commentData) {
    return Comment.create(commentData);
  }

  async getCommentById(commentId) {
    return Comment.findByPk(commentId);
  }

  async updateComment(comment) {
    return comment.save();
  }

  async deleteComment(commentId) {
    return Comment.destroy({
      where: {
        id: commentId,
      },
    });
  }
}

module.exports = CommentRepository;
