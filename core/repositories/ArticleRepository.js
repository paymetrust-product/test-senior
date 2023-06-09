const Article = require('../core/entities/Article');

class ArticleRepository {
  constructor(database) {
    this.database = database;
    this.ArticleModel = database.models.Article;
  }

  async findById(articleId) {
    return this.ArticleModel.findByPk(articleId);
  }

  async findAll() {
    return this.ArticleModel.findAll();
  }

  async create(article) {
    return this.ArticleModel.create(article);
  }

  async update(article) {
    const existingArticle = await this.ArticleModel.findByPk(article.id);
    if (!existingArticle) {
      throw new Error('Article not found');
    }
    return existingArticle.update(article);
  }

  async delete(articleId) {
    return this.ArticleModel.destroy({ where: { id: articleId } });
  }
}

module.exports = ArticleRepository;
