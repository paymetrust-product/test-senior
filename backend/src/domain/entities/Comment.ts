import { IsEmail, IsNotEmpty } from 'class-validator';

export default interface Comment {
  post: number;
  author: string;
  authorEmail: string;
  createdAt?: Date;
  updatedAt?: Date;
  parent?: Comment | null;
  content: string;
  id?: number;
}

export default class Comment implements Comment {
  id?: number;
  @IsNotEmpty()
  post!: number;

  @IsNotEmpty()
  author!: string;

  @IsNotEmpty()
  @IsEmail()
  authorEmail!: string;

  createdAt?: Date;

  updatedAt?: Date;

  parent?: Comment | null;

  @IsNotEmpty()
  content!: string;
}
