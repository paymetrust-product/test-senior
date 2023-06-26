import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('tags')
export class TagsModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @Column()
  name!: string;

  @Column()
  slug!: string;

  @UpdateDateColumn()
  updatedAt!: Date;
}
