import { Article } from './article';
import {Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from './user';
@Entity({name : "Comment"})
export class Comment  {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    text : string;
    @OneToOne(()=>Article)
    @JoinColumn()
    article : Article;
    @ManyToMany(()=> User)
    @JoinTable()
    user : User;
    @CreateDateColumn({nullable : true}) 
    createdAt : Date;
}