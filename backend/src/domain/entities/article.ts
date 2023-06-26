import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";
import { Category } from "./categorie";
@Entity({name : "Article"})
export class Article  {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    title : string;
    @Column({type : 'text'})
    text : string;
    @CreateDateColumn({nullable : true}) 
    createdAt : Date;
    @ManyToOne(()=> User)
    user : User; 
    @ManyToOne(()=>Category)
    category : Category;
    @Column({nullable : true})
    image ?: string;

}