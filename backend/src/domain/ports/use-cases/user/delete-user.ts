import User from '../../../entities/User';

export default interface DeleteUserUseCase {
  execute(id: number): Promise<boolean>;
}
