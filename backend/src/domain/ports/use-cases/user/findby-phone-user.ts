import User from '../../../entities/User';

export default interface FindByPhoneUserUseCase {
  execute(phone: String): Promise<User>;
}
