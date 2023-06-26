import { Tags } from 'tsoa';
import { DataSource } from 'typeorm';
import { CategoryModel } from './models/Category';
import { CommentModel } from './models/Comment';
import { PostModel } from './models/Post';
import { TagsModel } from './models/Tags';
import UserModel from './models/User';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || 'root',
  password: process.env.POSTGRES_PASSWORD || 'root',
  database: process.env.POSTGRES_DB || 'blog',
  synchronize: true,
  logging: true,
  entities: [PostModel, UserModel, CategoryModel, CommentModel, TagsModel],
  subscribers: [],
  migrations: []
});
