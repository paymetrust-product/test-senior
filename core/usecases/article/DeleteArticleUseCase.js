class DeleteArticleUseCase {
    constructor(articleRepository) {
      this.articleRepository = articleRepository;
    }
  
    async execute(articleId) {
      return this.articleRepository.delete(articleId);
    }
  }
  
  module.exports = DeleteArticleUseCase;
  