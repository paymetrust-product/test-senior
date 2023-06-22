import { User } from './../entities/user';
import { Category } from './../entities/categorie';

import { AppDataSource } from '../orm/data-source';
import { Article } from './../entities/article';
import { IRepositoryMethods } from './IRepositoryMethod';


export class ArticleRepository implements IRepositoryMethods{
    private  readonly source = AppDataSource.getRepository(Article);
    constructor(){
        
    }
    async create(dto: Article) {
        const article =  await this.source.create({...dto});
        return await this.source.save(article);
    }
    async read() {
       return await this.source.find({relations:["category","user"]});
    }
    async readById(id: string) {
        return await this.source.findOneBy({id});
    }
    async update(dto: Article) {
        const articleUpdated  = await this.source.createQueryBuilder().update().set({
          user     : dto.user,
          text     : dto.text,
          title    : dto.title,
          category : dto.category,
        }).where("id = :id",{id : dto.id}).execute();
        return articleUpdated;
    }
    async delete(id: string) {
        return await this.source.delete({id});
    }
   
}