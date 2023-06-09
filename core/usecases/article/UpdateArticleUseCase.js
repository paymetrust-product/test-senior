class UpdateArticleUseCase {
    constructor(articleRepository) {
      this.articleRepository = articleRepository;
    }
  
    async execute(articleData) {
      return this.articleRepository.update(articleData);
    }
  }
  
  module.exports = UpdateArticleUseCase;
  