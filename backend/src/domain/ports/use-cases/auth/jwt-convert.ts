import User from '../../../entities/User';

export default interface JwtConverUseCase {
  execute(user: User): string;
}
