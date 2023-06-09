const Comment = require('../core/entities/Comment');

class CommentRepository {
  constructor(database) {
    this.database = database;
    this.CommentModel = database.models.Comment;
  }

  async findByArticleId(articleId) {
    return this.CommentModel.findAll({ where: { articleId } });
  }

  async create(comment) {
    return this.CommentModel.create(comment);
  }

  async update(comment) {
    const existingComment = await this.CommentModel.findByPk(comment.id);
    if (!existingComment) {
      throw new Error('Comment not found');
    }
    return existingComment.update(comment);
  }

  async delete(commentId) {
    return this.CommentModel.destroy({ where: { id: commentId } });
  }
}

module.exports = CommentRepository;
