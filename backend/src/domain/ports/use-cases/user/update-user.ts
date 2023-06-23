import User from '../../../entities/User';

export default interface UpdateUserUseCase {
  execute(user: User): Promise<User | null>;
}
