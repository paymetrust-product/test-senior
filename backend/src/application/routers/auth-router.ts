import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import express, { Request, Response } from 'express';
import Login from '../../domain/entities/login';
import LoginUseCase from '../../domain/ports/use-cases/auth/login';

export default function LoginRouter(loginUseCase: LoginUseCase) {
  const router = express.Router();

  router.post('/login', async (req: Request, res: Response) => {
    try {
      const userData = plainToClass(Login, req.body);
      const validationErrors = await validate(userData);

      if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
      }
      const user = await loginUseCase.execute(userData);
      res.status(200).send(user);
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).send({ message: err.message });
      } else {
        res.status(500).send({ message: 'Error saving data' });
      }
    }
  });

  return router;
}
