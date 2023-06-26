import User from '../../../../src/domain/entities/User';
import UserRepository from '../../../../src/domain/ports/repositories/user.repository.port';
import CreatUser from '../../../../src/domain/use-cases/user/create-user';

describe('Create User Use Case', () => {
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

  let mockUserRepository: UserRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    mockUserRepository = new MockUserRepository();
  });

  test('should return true', async () => {
    const InputData: User = {
      id: 1,
      firstName: 'traore',
      lastName: 'teddy moustapha',
      phone: '0778754976',
      password: '1234',
      registered: new Date()
    };

    jest
      .spyOn(mockUserRepository, 'createUser')
      .mockImplementation(() => Promise.resolve(InputData));
    const createContactUseCase = new CreatUser(mockUserRepository);
    const result = await createContactUseCase.execute(InputData);
    expect(result).toBe(InputData);
  });
});
