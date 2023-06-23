import { PostModel } from '../../../infrastructure/data-sources/postgresql/models/Post';
import Post from '../../entities/Post';

export default interface PostRepository {
  createPost(post: PostModel): Promise<Post>;
  getPosts(): Promise<Post[]>;
  deletePost(id: number): Promise<boolean>;
  updatePost(Post: Post): Promise<Post | null>;
}
