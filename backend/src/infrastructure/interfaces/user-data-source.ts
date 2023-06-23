import User from '../../domain/entities/User';

export default interface UserDataSource {
  create(user: User): Promise<User>;
  getAll(): Promise<User[]>;
  deleteOne(id: number): Promise<boolean>;
  findOneByPhone(phone: String): Promise<User | null>;
  findOneByEmail(email: String): Promise<User | null>;
  updateOne(data: User): Promise<User | null>;
}
