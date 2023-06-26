import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  OneToMany,
  BeforeUpdate, BeforeInsert, CreateDateColumn
} from "typeorm";
import { User } from '@domain/entities/user.entity';
import { Category } from '@domain/entities/category.entity';
import { Comment } from '@domain/entities/comment.entity';
import slugify from 'slugify';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column({ type: 'text', nullable: true })
  slug: string;

  @Column({ type: 'text', nullable: true })
  content: string;

  @ManyToOne(() => User, user => user.articles)
  user: User;

  @ManyToOne(() => Category,category => category.articles)
  categories: Category;


  @Column({ length: 500, nullable: true })
  url: string;



  @OneToMany(() => Comment, comment => comment.article)
  comments: Comment[];

  @BeforeInsert()
  @BeforeUpdate()
  generateSlug(){
    this.slug = slugify(this.title,{lower:true})
  }

  @CreateDateColumn()
  createdAt: Date;
}