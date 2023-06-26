import { Comment } from './../entities/comment';
import { AppDataSource } from '../orm/data-source';
import { IRepositoryMethods } from './IRepositoryMethod';


export class CommentRepository implements IRepositoryMethods {

    private readonly source = AppDataSource.getRepository(Comment);

    async create(dto: Comment) {
        const comment =  await this.source.create({...dto});
        return await this.source.save(comment);
    }
    async read() {
        return await this.source.find();
    }
    async readById(id: string) {
        return await this.source.findOneBy({id});
    }
    async update(dto: Comment) {
        const articleUpdated  = await this.source.createQueryBuilder().update().set({
            text        : dto.text,
           
          }).where("id = :id",{id : dto.id}).execute();
          return articleUpdated;
    }
    async delete(id: string) {
        return await this.source.delete({id});
    }
  
}