import User from '../../../entities/User';

export default interface CreateUserUseCase {
  execute(user: User): Promise<User>;
}
