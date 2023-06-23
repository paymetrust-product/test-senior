import UserDataSource from '../../infrastructure/interfaces/user-data-source';
import User from '../entities/User';
import UserRepository from '../ports/repositories/user.repository.port';

export class UserRepositoryImpl implements UserRepository {
  userDataSource: UserDataSource;

  constructor(userDataSource: UserDataSource) {
    this.userDataSource = userDataSource;
  }

  async createUser(user: User): Promise<User> {
    const result = await this.userDataSource.create(user);
    return result;
  }
  async getUsers(): Promise<User[]> {
    const result = await this.userDataSource.getAll();
    return result;
  }
  async deleteUser(id: number): Promise<boolean> {
    return await this.userDataSource.deleteOne(id);
  }
  async updateUser(user: User): Promise<User | null> {
    return await this.userDataSource.updateOne(user);
  }

  findOneByPhone(phone: string): Promise<User | null> {
    return this.userDataSource.findOneByPhone(phone);
  }

  findOneByEmail(email: string): Promise<User | null> {
    return this.userDataSource.findOneByEmail(email);
  }
}
