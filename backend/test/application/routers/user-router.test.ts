import UserRouter from '../../../src/application/routers/user-router';
import User from '../../../src/domain/entities/User';
import CreateUserUseCase from '../../../src/domain/ports/use-cases/user/create-user';
import GetAllUserUseCase from '../../../src/domain/ports/use-cases/user/get-all.users';
import app from '../../../src/main';
import request from 'supertest';

class MockGetAllContactsUseCase implements GetAllUserUseCase {
  execute(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
}

class MockCreateUserUseCase implements CreateUserUseCase {
  execute(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
}

describe('User Router', () => {
  let mockCreateUsertUseCase: CreateUserUseCase;
  let mockGetAllUsersUseCase: GetAllUserUseCase;

  beforeAll(() => {
    mockGetAllUsersUseCase = new MockGetAllContactsUseCase();
    mockCreateUsertUseCase = new MockCreateUserUseCase();
    app.use(
      '/users',
      UserRouter(mockGetAllUsersUseCase, mockCreateUsertUseCase)
    );
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('POST /users', () => {
    test('POST /users', async () => {
      const InputData: User = {
        id: 1,
        firstName: 'traore',
        lastName: 'teddy moustapha',
        phone: '0778754976',
        password: '1234',
        registered: new Date()
      };
      jest
        .spyOn(mockCreateUsertUseCase, 'execute')
        .mockImplementation(() => Promise.resolve(InputData));
      const response = await request(app).post('/users').send(InputData);
      expect(response.status).toBe(201);
    });

    test('POST /user returns 500 on use case error', async () => {
      const InputData: User = {
        id: 1,
        firstName: 'traore',
        lastName: 'teddy moustapha',
        phone: '0778754976',
        password: '1234',
        registered: new Date()
      };
      jest
        .spyOn(mockCreateUsertUseCase, 'execute')
        .mockImplementation(() => Promise.reject(Error()));
      const response = await request(app).post('/users').send(InputData);
      expect(response.status).toBe(500);
    });
  });

  describe('GET User', () => {
    test('should return 200 with data', async () => {
      const ExpectedData: User[] = [
        {
          id: 1,
          firstName: 'traore',
          lastName: 'teddy moustapha',
          phone: '0778754976',
          password: '1234',
          registered: new Date()
        }
      ];
      jest
        .spyOn(mockGetAllUsersUseCase, 'execute')
        .mockImplementation(() => Promise.resolve(ExpectedData));

      const response = await request(app).get('/users');

      expect(response.status).toBe(200);
      expect(mockGetAllUsersUseCase.execute).toBeCalledTimes(1);
      expect(response.body).toStrictEqual(ExpectedData);
    });

    test('GET /users returns 500 on use case error', async () => {
      jest
        .spyOn(mockGetAllUsersUseCase, 'execute')
        .mockImplementation(() => Promise.reject(Error()));
      const response = await request(app).get('/users');
      expect(response.status).toBe(500);
      expect(response.body).toStrictEqual({ message: 'Error fetching data' });
    });
  });
});
