import { ArticleService } from "../domain/services/article/article.service";
import { logger } from "../utils/logger";

export class ArticleController {
    
  articleService = new ArticleService();
  
  async save(req : any ,res :any) {
    logger.info("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    logger.info(req.body);
    const result = await this.articleService.addArticle(req.body);
    logger.info("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    logger.info(result);
    res.status(result.code).send(result);
  }
  
}