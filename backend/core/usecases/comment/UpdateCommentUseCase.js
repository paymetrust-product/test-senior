class UpdateCommentUseCase {
    constructor(commentRepository) {
      this.commentRepository = commentRepository;
    }
  
    async execute(commentData) {
      return this.commentRepository.update(commentData);
    }
  }
  
  module.exports = UpdateCommentUseCase;
  