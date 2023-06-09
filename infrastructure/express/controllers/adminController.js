class AdminController {
    constructor(manageArticleUseCase, manageUserUseCase) {
      this.manageArticleUseCase = manageArticleUseCase;
      this.manageUserUseCase = manageUserUseCase;
    }
  
    async createArticle(req, res) {
      try {
        const articleData = req.body;
        const article = await this.manageArticleUseCase.create(articleData);
        res.json({ article });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async updateArticle(req, res) {
      try {
        const articleData = req.body;
        const article = await this.manageArticleUseCase.update(articleData);
        res.json({ article });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async deleteArticle(req, res) {
      try {
        const { articleId } = req.params;
        await this.manageArticleUseCase.delete(articleId);
        res.json({ message: 'Article deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async createUser(req, res) {
      try {
        const userData = req.body;
        const user = await this.manageUserUseCase.create(userData);
        res.json({ user });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async updateUser(req, res) {
      try {
        const userData = req.body;
        const user = await this.manageUserUseCase.update(userData);
        res.json({ user });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async deleteUser(req, res) {
      try {
        const { userId } = req.params;
        await this.manageUserUseCase.delete(userId);
        res.json({ message: 'User deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  }
  
  module.exports = AdminController;
  