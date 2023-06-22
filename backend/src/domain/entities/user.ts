import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./role";
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
    @ManyToOne(()=> Role)
    @JoinColumn()
    public role : string;
    @CreateDateColumn({nullable : true}) 
    createdAt : Date;
}