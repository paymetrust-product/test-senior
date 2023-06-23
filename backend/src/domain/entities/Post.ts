import { Transform, TransformFnParams } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';
import Comment from './Comment';

export enum CommentStatus {
  OPEN,
  CLOSE
}

export enum PostStatus {
  PUBLISH = 'publish',
  DRAFT = 'draft'
}

export default interface Post {
  author: number;
  createdAt?: Date;
  updatedAt?: Date;
  content: String;
  title: string;
  status: PostStatus;
  categories: number[];
  comments: Comment[];
  tags: number[];
  imageCover: string;
  images: string[];
  slug: string;
  id?: number;
}

export default class Post implements Post {
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => Number(value))
  author!: number;

  createdAt?: Date;

  updatedAt?: Date;

  @IsNotEmpty()
  content!: String;

  @IsNotEmpty()
  title!: string;

  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value as keyof typeof PostStatus)
  status!: PostStatus;

  @IsNotEmpty()
  @IsArray()
  @IsNumber({}, { each: true })
  @Transform(({ value }: TransformFnParams) =>
    value.map((it: string) => Number(it))
  )
  categories!: number[];

  comments!: Comment[];

  @IsNotEmpty()
  @IsArray()
  @IsNumber({}, { each: true })
  @Transform(({ value }: TransformFnParams) =>
    value.map((it: string) => Number(it))
  )
  tags!: number[];

  // @IsNotEmpty()
  imageCover!: string;

  // @IsNotEmpty()
  // @IsArray()
  images!: string[];

  @IsNotEmpty()
  slug!: string;

  id?: number;
}
