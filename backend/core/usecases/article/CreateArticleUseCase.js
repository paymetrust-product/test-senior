class CreateArticleUseCase {
    constructor(articleRepository) {
      this.articleRepository = articleRepository;
    }
  
    async execute(articleData) {
      return this.articleRepository.create(articleData);
    }
  }
  
  module.exports = CreateArticleUseCase;
  