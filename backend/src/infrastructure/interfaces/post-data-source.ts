import Post from '../../domain/entities/Post';
import { PostModel } from '../data-sources/postgresql/models/Post';

export default interface PostDataSource {
  create(post: PostModel): Promise<Post>;
  getAll(): Promise<Post[]>;
  deleteOne(id: number): Promise<boolean>;
  updateOne(data: Post): Promise<Post | null>;
}
