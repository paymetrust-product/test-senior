import TagRepository from '../../ports/repositories/tag.repository.port';
import DeleteTagUseCase from '../../ports/use-cases/tag/delete-tag';

export default class DeleteTag implements DeleteTagUseCase {
  tagRepository: TagRepository;
  constructor(tagRepository: TagRepository) {
    this.tagRepository = tagRepository;
  }
  async execute(id: number): Promise<boolean> {
    return await this.tagRepository.deleteTag(id);
  }
}
