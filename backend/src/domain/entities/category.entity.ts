import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  BeforeInsert,
  BeforeUpdate,
  CreateDateColumn, OneToMany
} from "typeorm";
import { Article } from '@domain/entities/article.entity';
import slugify from "slugify";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ type: 'text', nullable: true })
  slug: string;

  @OneToMany(() => Article,article => article.categories)
  articles: Article[];

  @BeforeInsert()
  @BeforeUpdate()
  generateSlug(){
    this.slug = slugify(this.name,{lower:true})
  }

  @CreateDateColumn()
  createdAt: Date;
}