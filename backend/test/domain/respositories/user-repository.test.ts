import User from '../../../src/domain/entities/User';
import UserRepository from '../../../src/domain/ports/repositories/user.repository.port';
import { UserRepositoryImpl } from '../../../src/domain/repositories/user.repository';
import UserDataSource from '../../../src/infrastructure/interfaces/user-data-source';

class MockUserDataSource implements UserDataSource {
  deleteOne(id: String): void {
    throw new Error('Method not implemented.');
  }
  updateOne(data: User): void {
    throw new Error('Method not implemented.');
  }
  create(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  getAll(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
}

describe('Contact Repository', () => {
  let mockUserDataSource: UserDataSource;
  let userRepository: UserRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    mockUserDataSource = new MockUserDataSource();
    userRepository = new UserRepositoryImpl(mockUserDataSource);
  });

  describe('getAllContacts', () => {
    test('should return data', async () => {
      const expectedData: User[] = [
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
        .spyOn(mockUserDataSource, 'getAll')
        .mockImplementation(() => Promise.resolve(expectedData));
      const result = await userRepository.getUsers();
      expect(result).toBe(expectedData);
    });
  });

  describe('createContact', () => {
    test('should return true', async () => {
      const inputData: User = {
        id: 1,
        firstName: 'traore',
        lastName: 'teddy moustapha',
        phone: '0778754976',
        password: '1234',
        registered: new Date()
      };
      jest
        .spyOn(mockUserDataSource, 'create')
        .mockImplementation(() => Promise.resolve(inputData));
      const result = await userRepository.createUser(inputData);
      expect(result).toBe(inputData);
    });
  });
});
