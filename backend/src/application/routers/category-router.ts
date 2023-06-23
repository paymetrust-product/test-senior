import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import express, { Request, Response } from 'express';
import Category from '../../domain/entities/Category';
import CreateCategoryUseCase from '../../domain/ports/use-cases/category/create-category';
import DeleteCategoryUseCase from '../../domain/ports/use-cases/category/delete-category';
import GetAllCategoryUseCase from '../../domain/ports/use-cases/category/get-all-category';
import UpdateCategoryUseCase from '../../domain/ports/use-cases/category/update-category';
import { auth } from '../middlewares/auth';

export default function CategoryRouter(
  getAllCategoriesUseCase: GetAllCategoryUseCase,
  createUserCategoriesUseCase: CreateCategoryUseCase,
  updateCategoriesUseCase: UpdateCategoryUseCase,
  deleteCategoriesUseCase: DeleteCategoryUseCase
) {
  const router = express.Router();

  router.get('/categories', auth, async (req: Request, res: Response) => {
    try {
      const categories = await getAllCategoriesUseCase.execute();
      res.send(categories);
    } catch (err) {
      res.status(500).send({ message: 'Error fetching data' });
    }
  });

  router.post('/categories', async (req: Request, res: Response) => {
    try {
      const userData = plainToClass(Category, req.body);
      const validationErrors = await validate(userData);

      if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
      }

      const user = await createUserCategoriesUseCase.execute(userData);

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

  router.put('/categories', auth, async (req: Request, res: Response) => {
    try {
      const userData = plainToClass(Category, req.body);

      if (!userData.id) {
        return res.status(400).json({ errors: 'Id is required' });
      }
      const user = await updateCategoriesUseCase.execute(userData);
      if (!user) {
        res.status(404).send({ message: 'Category not found' });
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

  router.delete(
    '/categories/:id',
    auth,
    async (req: Request, res: Response) => {
      try {
        const userId = Number.parseInt(req.params.id);

        if (!userId) {
          return res.status(400).json({ errors: 'Id is required' });
        }
        const user = await deleteCategoriesUseCase.execute(userId);
        if (!user) {
          return res.status(404).send({ message: 'Category not found' });
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
    }
  );

  return router;
}
