import { CategoryService } from './../domain/services/category/category.service';
import { logger } from "../utils/logger";

const  categoryService = new CategoryService();

export class CategoryController {
    async save(req : any ,res :any) {
        logger.info("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        logger.info("categoryController ===> save");
        logger.info(req.body);
        const result = await categoryService.addCategory(req.body);
        logger.info("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        logger.info(result);
        res.status(result?.code).send(result);
      }
      
      async find(req : any , res : any) {
        logger.info("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        logger.info("categoryController ===> find");
        logger.info(req.body);
        const result = await categoryService.getAll();
        logger.info("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        logger.info(result);
        res.status(result?.code).send(result);
      }
    
      async findById(req : any , res : any) {
        logger.info("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        logger.info("categoryController ===> findById");
        logger.info(req.params.id);
        const result = await categoryService.getById(req.params.id);
        logger.info("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        logger.info(result);
        res.status(result?.code).send(result);
      }
}