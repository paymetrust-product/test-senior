import { plainToClass } from 'class-transformer';
import Post from '../../../domain/entities/Post';
import PostDataSource from '../../interfaces/post-data-source';
import { AppDataSource } from './data-source';
import { PostModel } from './models/Post';

export default class PostDataSourceImpl implements PostDataSource {
  appDataSource = AppDataSource;

  async create(post: PostModel): Promise<Post> {
    const postEntity = plainToClass(Post, post);
    await this.appDataSource.manager.save(post);
    return postEntity;
  }

  async getAll(): Promise<Post[]> {
    const tagModels: PostModel[] = await this.appDataSource.manager.find(
      PostModel
    );
    return tagModels.map((userModel) => {
      const tag = plainToClass(Post, userModel);
      return tag;
    });
  }

  async deleteOne(id: number): Promise<boolean> {
    const userModel: PostModel | null = await this.appDataSource.manager.findOneBy(
      PostModel,
      { id }
    );

    if (!userModel) {
      return false;
    }
    await this.appDataSource.manager.remove(userModel);
    return true;
  }

  async updateOne(data: Post): Promise<Post | null> {
    let tagModel: PostModel | null = await this.appDataSource.manager.findOneBy(
      PostModel,
      { id: data.id }
    );
    if (!tagModel) {
      return null;
    }
    tagModel = plainToClass(PostModel, data);
    await this.appDataSource.manager.save(tagModel);
    return data;
  }
}
