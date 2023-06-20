import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity({name : "User"})
export class User  {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({nullable : true})
    firstName : string;
    @Column({nullable : true})
    lastName : string;
    @Column({nullable : true})
    email : string;
    @Column({nullable : true})
    password ?: string;
    @CreateDateColumn({nullable : true}) 
    createdAt : Date;
}