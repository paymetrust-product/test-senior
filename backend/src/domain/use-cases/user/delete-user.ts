import User from '../../entities/User';
import UserRepository from '../../ports/repositories/user.repository.port';
import DeleteUserUseCase from '../../ports/use-cases/user/delete-user';

export default class DeleteUser implements DeleteUserUseCase {
  userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(id: number): Promise<boolean> {
    return await this.userRepository.deleteUser(id);
  }
}
