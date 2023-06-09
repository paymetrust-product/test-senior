class CommentController {
    constructor(createCommentUseCase, readCommentUseCase, updateCommentUseCase, deleteCommentUseCase) {
      this.createCommentUseCase = createCommentUseCase;
      this.readCommentUseCase = readCommentUseCase;
      this.updateCommentUseCase = updateCommentUseCase;
      this.deleteCommentUseCase = deleteCommentUseCase;
    }
  
    async createComment(req, res) {
      try {
        const commentData = req.body;
        const comment = await this.createCommentUseCase.execute(commentData);
        res.json({ comment });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async getComment(req, res) {
      try {
        const { commentId } = req.params;
        const comment = await this.readCommentUseCase.execute(commentId);
        res.json({ comment });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async updateComment(req, res) {
      try {
        const commentData = req.body;
        const comment = await this.updateCommentUseCase.execute(commentData);
        res.json({ comment });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async deleteComment(req, res) {
      try {
        const { commentId } = req.params;
        await this.deleteCommentUseCase.execute(commentId);
        res.json({ message: 'Comment deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  }
  
  module.exports = CommentController;
  