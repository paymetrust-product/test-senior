import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import express, { Request, Response } from 'express';
import User from '../../domain/entities/User';
import CreateUserUseCase from '../../domain/ports/use-cases/user/create-user';
import DeleteUserUseCase from '../../domain/ports/use-cases/user/delete-user';
import GetAllUserUseCase from '../../domain/ports/use-cases/user/get-all.users';
import UpdateUserUseCase from '../../domain/ports/use-cases/user/update-user';
import { auth } from '../middlewares/auth';

export default function UserRouter(
  getAllUsersUseCase: GetAllUserUseCase,
  createUserUseCase: CreateUserUseCase,
  updateUserUseCase: UpdateUserUseCase,
  deleteUserUseCase: DeleteUserUseCase
) {
  const router = express.Router();

  router.get('/users', auth, async (req: Request, res: Response) => {
    try {
      const users = await getAllUsersUseCase.execute();
      res.send(users);
    } catch (err) {
      res.status(500).send({ message: 'Error fetching data' });
    }
  });

  router.post('/users', async (req: Request, res: Response) => {
    try {
      const userData = plainToClass(User, req.body);
      const validationErrors = await validate(userData);

      if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
      }

      const user = await createUserUseCase.execute(userData);

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

  router.put('/users', auth, async (req: Request, res: Response) => {
    try {
      const userData = plainToClass(User, req.body);

      if (!userData.id) {
        return res.status(400).json({ errors: 'Id is required' });
      }
      const user = await updateUserUseCase.execute(userData);
      if (!user) {
        res.status(404).send({ message: 'User not found' });
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

  router.delete('/users/:id', auth, async (req: Request, res: Response) => {
    try {
      const userId = Number.parseInt(req.params.id);

      if (!userId) {
        return res.status(400).json({ errors: 'Id is required' });
      }
      const user = await deleteUserUseCase.execute(userId);
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
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
