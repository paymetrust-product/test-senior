class DeleteCommentUseCase {
    constructor(commentRepository) {
      this.commentRepository = commentRepository;
    }
  
    async execute(commentId) {
      return this.commentRepository.delete(commentId);
    }
  }
  
  module.exports = DeleteCommentUseCase;
  