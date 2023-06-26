import { Inject, Injectable } from "@nestjs/common";
import { User } from "@domain/entities/user.entity";
import { IUserRepository } from "@domain/interfaces/user.interface";
import * as bcrypt from "bcrypt";


@Injectable()
export class UserService {
  constructor(
    @Inject('IUserRepository')
    private readonly iUserRepository: IUserRepository,
  ) {}

  async findAll(): Promise<User[]> {
    return this.iUserRepository.findAll();
  }

  async findById(id: number): Promise<User | undefined> {
    return this.iUserRepository.findById( id);
  }

  async create(user: User): Promise<User> {
    user.password = await bcrypt.hash(user.password, 10);
    return this.iUserRepository.createUser(user);
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return this.iUserRepository.findByUsername(username);
  }

  async update(id: number, user: User): Promise<User | undefined> {
    user.password = await bcrypt.hash(user.password, 10);
    return this.iUserRepository.updateUser(id,user);
  }

  async delete(id: number): Promise<void> {
    await this.iUserRepository.deleteUser(id);
  }
}
