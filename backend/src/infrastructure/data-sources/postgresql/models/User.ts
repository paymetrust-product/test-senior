import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { PostModel } from './Post';

import bcrypt from 'bcrypt';

@Entity('users')
export default class UserModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column({ unique: true, nullable: true })
  email?: string;

  @Column()
  phone!: string;

  @Column()
  password!: string;

  @OneToMany((_type) => PostModel, (post: PostModel) => post.author)
  posts!: Array<PostModel>;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @BeforeInsert()
  async beforeInsert() {
    const saltRounds = 8;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  @BeforeUpdate()
  async beforeUpdate() {
    if (this.password) {
      const saltRounds = 8;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  }
}
