import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import express, { Request, Response } from 'express';
import Comment from '../../domain/entities/Comment';
import CreateCommentUserCase from '../../domain/ports/use-cases/comment/create-comment';
import GetAllCommentByPostUseCase from '../../domain/ports/use-cases/comment/get-all-by-post';
import UpdateCommentUseCase from '../../domain/ports/use-cases/comment/update-comment';
import { auth } from '../middlewares/auth';

export default function CommentRouter(
  getAllCommentByPost: GetAllCommentByPostUseCase,
  createCommentUseCase: CreateCommentUserCase,
  updateCommentUseCase: UpdateCommentUseCase
) {
  const router = express.Router();

  router.get('/comments/:postId', auth, async (req: Request, res: Response) => {
    try {
      const postId = Number.parseInt(req.params.postId);

      if (!postId) {
        return res.status(400).json({ errors: 'postId is required' });
      }
      const comments = await getAllCommentByPost.execute(postId);
      if (!comments) {
        return res.status(404).send({ message: 'postId is  not found' });
      } else {
        res.statusCode = 200;
        return res.send(comments);
      }
    } catch (err) {
      res.status(500).send({ message: 'Error fetching data' });
    }
  });

  router.post('/comments', async (req: Request, res: Response) => {
    try {
      const userData = plainToClass(Comment, req.body);
      const validationErrors = await validate(userData);

      if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
      }

      const comment = await createCommentUseCase.execute(userData);
      res.statusCode = 200;
      return res.send(comment);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).send({ message: err.message });
      } else {
        return res.status(500).send({ message: 'Error saving data' });
      }
    }
  });

  router.put('/comments', auth, async (req: Request, res: Response) => {
    try {
      const userData = plainToClass(Comment, req.body);

      if (!userData.id) {
        return res.status(400).json({ errors: 'Id is required' });
      }
      const user = await updateCommentUseCase.execute(userData);
      if (!user) {
        res.status(404).send({ message: 'Comment not found' });
      } else {
        res.statusCode = 200;
        return res.send(user);
      }
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).send({ message: err.message });
      } else {
        return res.status(500).send({ message: 'Error saving data' });
      }
    }
  });

  return router;
}
