import Login from '../../../entities/login';
import User from '../../../entities/User';

export default interface LoginUseCase {
  execute(login: Login): Promise<Object>;
}
