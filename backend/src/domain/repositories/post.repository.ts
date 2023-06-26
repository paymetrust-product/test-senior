import { PostModel } from '../../infrastructure/data-sources/postgresql/models/Post';
import PostDataSource from '../../infrastructure/interfaces/post-data-source';
import Post from '../entities/Post';
import PostRepository from '../ports/repositories/post.repository.port';

export class PostRepositoryImpl implements PostRepository {
  postDataSource: PostDataSource;

  constructor(postDataSource: PostDataSource) {
    this.postDataSource = postDataSource;
  }

  async createPost(Post: PostModel): Promise<Post> {
    const result = await this.postDataSource.create(Post);
    return result;
  }
  async getPosts(): Promise<Post[]> {
    const result = await this.postDataSource.getAll();
    return result;
  }
  async deletePost(id: number): Promise<boolean> {
    return await this.postDataSource.deleteOne(id);
  }
  async updatePost(Post: Post): Promise<Post | null> {
    return await this.postDataSource.updateOne(Post);
  }
}
