class ArticleController {
    constructor(createArticleUseCase, readArticleUseCase, updateArticleUseCase, deleteArticleUseCase) {
      this.createArticleUseCase = createArticleUseCase;
      this.readArticleUseCase = readArticleUseCase;
      this.updateArticleUseCase = updateArticleUseCase;
      this.deleteArticleUseCase = deleteArticleUseCase;
    }
  
    async createArticle(req, res) {
      try {
        const articleData = req.body;
        const article = await this.createArticleUseCase.execute(articleData);
        res.json({ article });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async getArticle(req, res) {
      try {
        const { articleId } = req.params;
        const article = await this.readArticleUseCase.execute(articleId);
        res.json({ article });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async updateArticle(req, res) {
      try {
        const articleData = req.body;
        const article = await this.updateArticleUseCase.execute(articleData);
        res.json({ article });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async deleteArticle(req, res) {
      try {
        const { articleId } = req.params;
        await this.deleteArticleUseCase.execute(articleId);
        res.json({ message: 'Article deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  }
  
  module.exports = ArticleController;
  