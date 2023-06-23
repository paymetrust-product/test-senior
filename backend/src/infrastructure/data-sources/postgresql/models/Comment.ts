import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { PostModel } from './Post';

@Entity('comments')
export class CommentModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  postId!: number;

  @ManyToOne((_type) => PostModel, (post: PostModel) => post.comments)
  @JoinColumn()
  post!: PostModel;

  @Column()
  author!: string;

  @Column()
  authorEmail!: string;

  @Column({
    type: 'text'
  })
  content!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
