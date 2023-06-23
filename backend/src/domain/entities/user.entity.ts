import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BeforeInsert,
  BeforeUpdate,
  CreateDateColumn
} from "typeorm";
import { Article } from '@domain/entities/article.entity';
import { Comment } from '@domain/entities/comment.entity';
import slugify from "slugify";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nom: string;

  @Column({ length: 255 })
  prenoms: string;

  @Column({ length: 255 })
  username: string;

  @Column({ type: 'text', nullable: true })
  slug: string;

  @Column({ length: 255 })
  password: string;

  @OneToMany(() => Article, article => article.user)
  articles: Article[];

  @OneToMany(() => Comment, comment => comment.user)
  comments: Comment[];

  @BeforeInsert()
  @BeforeUpdate()
  generateSlug(){
    this.slug = slugify(this.prenoms,{lower:true})
  }

  @CreateDateColumn()
  createdAt: Date;
}