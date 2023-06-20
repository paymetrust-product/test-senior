import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity({name : "Category"})
export class Category  {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({nullable : true})
    libelle : string;
    @Column({nullable : true})
    flag : number;
    @CreateDateColumn({nullable : true}) 
    createdAt : Date;
}