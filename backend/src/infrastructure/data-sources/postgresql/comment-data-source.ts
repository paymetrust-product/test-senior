import { plainToClass } from 'class-transformer';
import Comment from '../../../domain/entities/Comment';
import Tag from '../../../domain/entities/Tag';
import CommentDataSource from '../../interfaces/comment-data-source';
import { AppDataSource } from './data-source';
import { CommentModel } from './models/Comment';
import { PostModel } from './models/Post';

export default class CommentDataSourceImpl implements CommentDataSource {
  appDataSource = AppDataSource;

  async create(comment: Comment): Promise<Comment> {
    const tagModel = plainToClass(CommentModel, comment);
    await this.appDataSource.manager.save(tagModel);
    return comment;
  }

  async getAll(): Promise<Comment[]> {
    const tagModels: CommentModel[] = await this.appDataSource.manager.find(
      CommentModel
    );
    return tagModels.map((userModel) => {
      const tag = plainToClass(Comment, userModel);
      return tag;
    });
  }

  async getAllByPost(postId: number): Promise<Comment[] | null> {
    const post: PostModel | null = await this.appDataSource.manager.findOneBy(
      PostModel,
      { id: postId }
    );

    if (post) {
      const commentModels: CommentModel[] = await this.appDataSource.manager.find(
        CommentModel,
        {
          where: { post: { id: postId } },
          relations: ['post']
        }
      );
      const comments: Comment[] = commentModels.map((commentModel) =>
        plainToClass(Comment, commentModel)
      );
      return comments;
    } else {
      return null;
    }
  }

  async deleteOne(id: number): Promise<boolean> {
    const userModel: CommentModel | null = await this.appDataSource.manager.findOneBy(
      CommentModel,
      { id }
    );

    if (!userModel) {
      return false;
    }
    await this.appDataSource.manager.remove(userModel);
    return true;
  }

  async updateOne(data: Comment): Promise<Comment | null> {
    let tagModel: CommentModel | null = await this.appDataSource.manager.findOneBy(
      CommentModel,
      { id: data.id }
    );
    if (!tagModel) {
      return null;
    }
    tagModel = plainToClass(CommentModel, data);
    await this.appDataSource.manager.save(tagModel);
    return data;
  }
}
