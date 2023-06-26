import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { PostStatus } from '../../../../domain/entities/Post';
import { CategoryModel } from './Category';
import { CommentModel } from './Comment';
import { TagsModel } from './Tags';
import UserModel from './User';

@Entity('posts')
export class PostModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  userId!: number;

  @ManyToOne((_type) => UserModel, (user: UserModel) => user.posts)
  @JoinColumn()
  author!: UserModel;

  @Column({
    type: 'text'
  })
  content!: string;

  @Column()
  title!: string;

  @Column()
  slug!: string;

  @Column({ type: 'enum', enum: PostStatus, default: PostStatus.DRAFT })
  status!: PostStatus;

  @ManyToMany(() => CategoryModel, (it) => it)
  @JoinTable({ name: 'posts_categories' })
  categories!: CategoryModel[];

  @OneToMany((_type) => CommentModel, (comment: CommentModel) => comment.post)
  comments!: CommentModel[];

  @ManyToMany(() => TagsModel, (it) => it)
  @JoinTable({ name: 'posts_tags' })
  tags!: TagsModel[];

  @Column({ nullable: true })
  imageCover!: string;

  @Column('varchar', { array: true, nullable: true })
  images!: string[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
