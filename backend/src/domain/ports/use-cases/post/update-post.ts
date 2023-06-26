import Post from '../../../entities/Post';

export default interface UpdatePostUseCase {
  execute(post: Post): Promise<Post | null>;
}
