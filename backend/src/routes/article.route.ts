import  express  from 'express';
import { ArticleController } from '../controller/article.controller';
import { authMiddleware } from '../utils/authorization';

/********************************************************/
const articleRoutes      = express.Router();
const articleController  = new ArticleController();
/********************************************************/

articleRoutes.post("/api/article",authMiddleware,articleController.save);
articleRoutes.get("/api/article",articleController.find);
articleRoutes.get("/api/article/:id",articleController.findById);
articleRoutes.put("/api/article",authMiddleware,articleController.save);
articleRoutes.delete("/api/article/:id",authMiddleware,articleController.save);

export {articleRoutes}