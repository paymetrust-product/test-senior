import User from '../../entities/User';

export default interface UserRepository {
  createUser(user: User): Promise<User>;
  getUsers(): Promise<User[]>;
  deleteUser(id: number): Promise<boolean>;
  updateUser(user: User): Promise<User | null>;
  findOneByPhone(phone: string): Promise<User | null>;
  findOneByEmail(email: string): Promise<User | null>;
}
