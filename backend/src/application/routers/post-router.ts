import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import express, { Request, Response } from 'express';
import Post from '../../domain/entities/Post';
import CreatePostUserCase from '../../domain/ports/use-cases/post/create-post';
import DeletePostUseCase from '../../domain/ports/use-cases/post/delete-post';
import GetAllPostUseCase from '../../domain/ports/use-cases/post/get-all.post';
import UpdatePostUseCase from '../../domain/ports/use-cases/post/update-post';
import { auth } from '../middlewares/auth';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

export const upload = multer({ storage: storage });

export default function PostRouter(
  getAllPostUseCase: GetAllPostUseCase,
  createPostUseCase: CreatePostUserCase,
  updatePostUseCase: UpdatePostUseCase,
  deletePostUseCase: DeletePostUseCase
) {
  const router = express.Router();

  router.get('/posts', async (req: Request, res: Response) => {
    try {
      const posts = await getAllPostUseCase.execute();
      res.send(posts);
    } catch (err) {
      res.status(500).send({ message: 'Error fetching data' });
    }
  });

  const cpUpload = upload.fields([
    { name: 'imageCover', maxCount: 1 },
    { name: 'images', maxCount: 5 }
  ]);
  router.post('/posts', cpUpload, auth, async (req: Request, res: Response) => {
    try {
      const userData = plainToClass(Post, req.body);
      const validationErrors = await validate(userData);

      if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
      }

      const user = await createPostUseCase.execute(userData);

      res.statusCode = 201;
      res.send(user);
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).send({ message: err.message });
      } else {
        res.status(500).send({ message: 'Error saving data' });
      }
    }
  });

  router.put('/posts', auth, async (req: Request, res: Response) => {
    try {
      const userData = plainToClass(Post, req.body);

      if (!userData.id) {
        return res.status(400).json({ errors: 'Id is required' });
      }
      const user = await updatePostUseCase.execute(userData);
      if (!user) {
        res.status(404).send({ message: 'Post not found' });
      } else {
        res.statusCode = 200;
        res.send(user);
      }
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).send({ message: err.message });
      } else {
        res.status(500).send({ message: 'Error saving data' });
      }
    }
  });

  router.delete('/posts/:id', auth, async (req: Request, res: Response) => {
    try {
      const userId = Number.parseInt(req.params.id);

      if (!userId) {
        return res.status(400).json({ errors: 'Id is required' });
      }
      const user = await deletePostUseCase.execute(userId);
      if (!user) {
        return res.status(404).send({ message: 'Post not found' });
      } else {
        return res.status(204).send(null);
      }
    } catch (err) {
      if (err instanceof Error) {
        return res.status(404).send({ message: err.message });
      } else {
        return res.status(500).send({ message: 'Error saving data' });
      }
    }
  });

  return router;
}
