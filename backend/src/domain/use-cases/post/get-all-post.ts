import Post from '../../entities/Post';
import Tag from '../../entities/Tag';
import PostRepository from '../../ports/repositories/post.repository.port';
import TagRepository from '../../ports/repositories/tag.repository.port';
import GetAllPostUseCase from '../../ports/use-cases/post/get-all.post';
import GetAllTagUseCase from '../../ports/use-cases/tag/get-all.tag';

export class GetAllPosts implements GetAllPostUseCase {
  postRepository: PostRepository;
  constructor(postRepository: PostRepository) {
    this.postRepository = postRepository;
  }

  async execute(): Promise<Post[]> {
    const result = await this.postRepository.getPosts();
    return result;
  }
}
