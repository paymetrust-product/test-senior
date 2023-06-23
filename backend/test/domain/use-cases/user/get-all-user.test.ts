import User from '../../../../src/domain/entities/User';
import UserRepository from '../../../../src/domain/ports/repositories/user.repository.port';
import { GetAllUsers } from '../../../../src/domain/use-cases/user/get-all-user';

describe('Get All users', () => {
  class MockUserRepository implements UserRepository {
    createUser(user: User): Promise<User> {
      throw new Error('Method not implemented.');
    }
    getUsers(): Promise<User[]> {
      throw new Error('Method not implemented.');
    }
    deleteUser(user: User): Promise<null> {
      throw new Error('Method not implemented.');
    }
    updateUser(user: User): Promise<User> {
      throw new Error('Method not implemented.');
    }
    findOneByPhone(phone: string): Promise<User | null> {
      throw new Error('Method not implemented.');
    }
  }

  let mockUserRepository: MockUserRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    mockUserRepository = new MockUserRepository();
  });

  test('should return data', async () => {
    const ExpectedResult: User[] = [
      {
        id: 1,
        firstName: 'traore',
        lastName: 'teddy moustapha',
        phone: '0778754976',
        password: '1234',
        registered: new Date()
      },
      {
        id: 2,
        firstName: 'traore',
        lastName: 'teddy moustapha',
        phone: '0778754976',
        password: '1234',
        registered: new Date()
      }
    ];

    jest
      .spyOn(mockUserRepository, 'getUsers')
      .mockImplementation(() => Promise.resolve(ExpectedResult));
    const getAllUserUseCase = new GetAllUsers(mockUserRepository);
    const result = await getAllUserUseCase.execute();
    expect(result).toStrictEqual(ExpectedResult);
  });
});
