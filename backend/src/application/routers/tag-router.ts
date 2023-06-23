import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import express, { Request, Response } from 'express';
import Tag from '../../domain/entities/Tag';
import CreateUserTagCase from '../../domain/ports/use-cases/tag/create-tag';
import DeleteTagUseCase from '../../domain/ports/use-cases/tag/delete-tag';
import GetAllTagUseCase from '../../domain/ports/use-cases/tag/get-all.tag';
import UpdateTagUseCase from '../../domain/ports/use-cases/tag/update-tag';
import { auth } from '../middlewares/auth';

export default function TagRouter(
  getAllTagUseCase: GetAllTagUseCase,
  createTagUseCase: CreateUserTagCase,
  updateTagUseCase: UpdateTagUseCase,
  deleteTagUseCase: DeleteTagUseCase
) {
  const router = express.Router();

  router.get('/tags', auth, async (req: Request, res: Response) => {
    try {
      const tags = await getAllTagUseCase.execute();
      res.send(tags);
    } catch (err) {
      res.status(500).send({ message: 'Error fetching data' });
    }
  });

  router.post('/tags', async (req: Request, res: Response) => {
    try {
      const userData = plainToClass(Tag, req.body);
      const validationErrors = await validate(userData);

      if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
      }

      const user = await createTagUseCase.execute(userData);

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

  router.put('/tags', auth, async (req: Request, res: Response) => {
    try {
      const userData = plainToClass(Tag, req.body);

      if (!userData.id) {
        return res.status(400).json({ errors: 'Id is required' });
      }
      const user = await updateTagUseCase.execute(userData);
      if (!user) {
        res.status(404).send({ message: 'Tag not found' });
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

  router.delete('/tags/:id', auth, async (req: Request, res: Response) => {
    try {
      const userId = Number.parseInt(req.params.id);

      if (!userId) {
        return res.status(400).json({ errors: 'Id is required' });
      }
      const user = await deleteTagUseCase.execute(userId);
      if (!user) {
        return res.status(404).send({ message: 'Tag not found' });
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
