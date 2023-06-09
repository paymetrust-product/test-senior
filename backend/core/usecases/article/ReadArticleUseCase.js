class ReadArticleUseCase {
    constructor(articleRepository) {
      this.articleRepository = articleRepository;
    }
  
    async execute(articleId) {
      return this.articleRepository.findById(articleId);
    }
  }
  
  module.exports = ReadArticleUseCase;
  