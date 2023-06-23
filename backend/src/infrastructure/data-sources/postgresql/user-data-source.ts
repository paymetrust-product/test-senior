import { plainToClass } from 'class-transformer';
import User from '../../../domain/entities/User';
import UserDataSource from '../../interfaces/user-data-source';
import { AppDataSource } from './data-source';
import UserModel from './models/User';

export default class UserDataSourceImpl implements UserDataSource {
  appDataSource = AppDataSource;

  async create(user: User): Promise<User> {
    const userModel = plainToClass(UserModel, user);
    await this.appDataSource.manager.save(userModel);
    return user;
  }

  async getAll(): Promise<User[]> {
    const userModels: UserModel[] = await this.appDataSource.manager.find(
      UserModel
    );
    return userModels.map((userModel) => {
      const { password, ...user } = plainToClass(User, userModel);
      return user;
    });
  }

  async deleteOne(id: number): Promise<boolean> {
    const userModel: UserModel | null = await this.appDataSource.manager.findOneBy(
      UserModel,
      { id }
    );

    if (!userModel) {
      return false;
    }
    await this.appDataSource.manager.remove(userModel);
    return true;
  }

  async updateOne(data: User): Promise<User | null> {
    let userModel: UserModel | null = await this.appDataSource.manager.findOneBy(
      UserModel,
      { id: data.id }
    );
    if (!userModel) {
      return null;
    }
    const { password, ...dataOther } = data;
    userModel = plainToClass(UserModel, dataOther);
    await this.appDataSource.manager.save(userModel);
    return dataOther;
  }

  async findOneByPhone(phone: string): Promise<User | null> {
    const userModel: UserModel | null = await this.appDataSource.manager.findOneBy(
      UserModel,
      { phone }
    );
    if (userModel) {
      const user = plainToClass(User, userModel);
      return user;
    } else {
      return null;
    }
  }

  async findOneByEmail(email: string): Promise<User | null> {
    const userModel: UserModel | null = await this.appDataSource.manager.findOneBy(
      UserModel,
      { email }
    );
    if (userModel) {
      const user = plainToClass(User, userModel);
      return user;
    } else {
      return null;
    }
  }
}
