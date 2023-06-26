import { AppDataSource } from '../orm/data-source';
import { IRepositoryMethods } from './IRepositoryMethod';
import { User } from '../entities/user';


export class UserRepository implements IRepositoryMethods {

    private readonly source = AppDataSource.getRepository(User);

    async create(dto: User) {
        const user =  await this.source.create({...dto});
        return await this.source.save(user);
    }
    async read() {
        return await this.source.find();
    }
    async readById(id: string) {
        return await this.source.findOneBy({id});
    }

    async isMailUsed(email : string) {
       return await this.source.countBy({email});
    }

    async readByEmail(email : string) {
        return await this.source.findOneBy({email});
    }

    async update(dto: User) {
        const articleUpdated  = await this.source.createQueryBuilder().update().set({
            firstName  : dto.firstName,
            lastName   : dto.lastName,
            email      : dto.email,
            role       : dto.role
          }).where("id = :id",{id : dto.id}).execute();
          return articleUpdated;
    }
    async delete(id: string) {
        return await this.source.delete({id});
    }
  
}