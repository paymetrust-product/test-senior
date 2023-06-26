import { CommentService } from './../domain/services/comment/comment.service';
import { logger } from "../utils/logger";

const  commentService = new CommentService();

export class CommentController {
    async save(req : any ,res :any) {
        logger.info("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        logger.info("commentController ===> save");
        logger.info(req.body);
        const result = await commentService.addComment(req.body);
        logger.info("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        logger.info(result);
        res.status(result.code).send(result);
      }
      
      async find(req : any , res : any) {
        logger.info("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        logger.info("commentController ===> find");
        logger.info(req.body);
        const result = await commentService.getAll();
        logger.info("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        logger.info(result);
        res.status(result.code).send(result);
      }
    
      async findById(req : any , res : any) {
        logger.info("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        logger.info(req.body);
        const result = await commentService.getById(req.params.id);
        logger.info("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        logger.info(result);
        res.status(result.code).send(result);
      }
}