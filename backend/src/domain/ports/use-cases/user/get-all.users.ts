import User from '../../../entities/User';

export default interface GetAllUserUseCase {
  execute(): Promise<User[]>;
}
