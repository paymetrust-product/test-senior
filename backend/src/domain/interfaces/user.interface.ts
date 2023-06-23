import {User} from "../entities/user.entity";

export interface IUserRepository{
  findAll(): Promise<User[]>
  findById(id: number): Promise<User | undefined>
  createUser(user: User): Promise<User>
  findByUsername(username: string): Promise<User | undefined>
  updateUser(id: number, user: User): Promise<User | undefined>
  deleteUser(id: number): Promise<void>
}