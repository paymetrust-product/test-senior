import  express  from 'express';
import { authMiddleware } from '../utils/authorization';
import { CommentController } from '../controller/comment.controller';

/********************************************************/
const commentRoutes      = express.Router();
const commentController  = new CommentController();
/********************************************************/

commentRoutes.post("/api/comment",authMiddleware,commentController.save);
commentRoutes.get("/api/comment",commentController.find);
commentRoutes.get("/api/comment/:id",commentController.findById);
commentRoutes.put("/api/comment",authMiddleware,commentController.save);
commentRoutes.delete("/api/comment/:id",authMiddleware,commentController.save);

export {commentRoutes}