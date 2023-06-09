class ReadCommentUseCase {
    constructor(commentRepository) {
      this.commentRepository = commentRepository;
    }
  
    async execute(commentId) {
      return this.commentRepository.findById(commentId);
    }
  }
  
  module.exports = ReadCommentUseCase;
  