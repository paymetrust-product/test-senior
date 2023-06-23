import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BeforeInsert,
  BeforeUpdate,
  CreateDateColumn
} from "typeorm";
import { Article } from '@domain/entities/article.entity';
import { User } from '@domain/entities/user.entity';
import slugify from "slugify";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;


  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'text', nullable: true })
  slug: string;

  @ManyToOne(() => Article, article => article.comments)
  article: Article;

  @ManyToOne(() => User, user => user.comments)
  user: User;

  @BeforeInsert()
  @BeforeUpdate()
  generateSlug(){
    this.slug = slugify(this.title,{lower:true})
  }

  @CreateDateColumn()
  createdAt: Date;
}