import Post from '../../entities/Post';
import PostRepository from '../../ports/repositories/post.repository.port';
import UpdatePostUseCase from '../../ports/use-cases/post/update-post';

export default class UpdatePost implements UpdatePostUseCase {
  postRepository: PostRepository;
  constructor(postRepository: PostRepository) {
    this.postRepository = postRepository;
  }

  async execute(tag: Post): Promise<Post | null> {
    if (!tag.id) {
      throw new Error('Id is required ');
    }
    return await this.postRepository.updatePost(tag);
  }
}
