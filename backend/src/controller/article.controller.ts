import { ArticleService } from "../domain/services/article/article.service";
import { logger } from "../utils/logger";

const  articleService = new ArticleService();

export class ArticleController {

  async save(req : any ,res :any) {
    logger.info("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    logger.info("ArticleController ===> Save");
    logger.info(req.body);
    const result = await articleService.addArticle(req.body);
    logger.info("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    logger.info(result);
    res.status(result.code).send(result);
  }
  
  async find(req : any , res : any) {
    logger.info("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    logger.info("ArticleController ===> Find");
    logger.info(req.body);
    const result = await articleService.getAll();
    logger.info("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    logger.info(result);
    res.status(result.code).send(result);
  }

  async findById(req : any , res : any) {
    logger.info("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    logger.info("ArticleController ===> findById");
    logger.info(req.body);
    const result = await articleService.getById(req.params.id);
    logger.info("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    logger.info(result);
    res.status(result.code).send(result);
  }
}