import { Category } from './../entities/categorie';
import { AppDataSource } from '../orm/data-source';
import { IRepositoryMethods } from './IRepositoryMethod';


export class CategoryRepository implements IRepositoryMethods {

    private readonly source = AppDataSource.getRepository(Category);

    async create(dto: Category) {
        const category =  await this.source.create({...dto});
        return await this.source.save(category);
    }
    async read() {
        return await this.source.find();
    }
    async readById(id: string) {
        return await this.source.findOneBy({id});
    }
    async update(dto: Category) {
        const articleUpdated  = await this.source.createQueryBuilder().update().set({
            flag        : dto.flag,
            libelle     : dto.libelle,
          }).where("id = :id",{id : dto.id}).execute();
          return articleUpdated;
    }
    async delete(id: string) {
        return await this.source.delete({id});
    }
  
}