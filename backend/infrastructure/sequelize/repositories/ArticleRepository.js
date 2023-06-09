const Article = require('../models/Article');

class ArticleRepository {
  async createArticle(articleData) {
    return Article.create(articleData);
  }

  async getArticleById(articleId) {
    return Article.findByPk(articleId);
  }

  async updateArticle(article) {
    return article.save();
  }

  async deleteArticle(articleId) {
    return Article.destroy({
      where: {
        id: articleId,
      },
    });
  }
}

module.exports = ArticleRepository;
