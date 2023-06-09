class ManageArticleUseCase {
    constructor(articleRepository) {
      this.articleRepository = articleRepository;
    }
  
    async create(articleData) {
      return this.articleRepository.create(articleData);
    }
  
    async update(articleData) {
      return this.articleRepository.update(articleData);
    }
  
    async delete(articleId) {
      return this.articleRepository.delete(articleId);
    }
  }
  
  module.exports = ManageArticleUseCase;
  