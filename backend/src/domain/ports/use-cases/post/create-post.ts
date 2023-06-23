import Post from '../../../entities/Post';

export default interface CreatePostUserCase {
  execute(post: Post): Promise<Post>;
}
