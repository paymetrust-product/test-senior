import PostRepository from '../../ports/repositories/post.repository.port';
import TagRepository from '../../ports/repositories/tag.repository.port';
import DeletePostUseCase from '../../ports/use-cases/post/delete-post';
import DeleteTagUseCase from '../../ports/use-cases/tag/delete-tag';

export default class DeletePost implements DeletePostUseCase {
  postRepository: PostRepository;
  constructor(postRepository: PostRepository) {
    this.postRepository = postRepository;
  }
  async execute(id: number): Promise<boolean> {
    return await this.postRepository.deletePost(id);
  }
}
