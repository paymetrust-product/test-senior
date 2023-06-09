class CreateCommentUseCase {
    constructor(commentRepository) {
      this.commentRepository = commentRepository;
    }
  
    async execute(commentData) {
      return this.commentRepository.create(commentData);
    }
  }
  
  module.exports = CreateCommentUseCase;
  