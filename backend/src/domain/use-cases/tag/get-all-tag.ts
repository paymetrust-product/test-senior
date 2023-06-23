import Tag from '../../entities/Tag';
import TagRepository from '../../ports/repositories/tag.repository.port';
import GetAllTagUseCase from '../../ports/use-cases/tag/get-all.tag';

export class GetAllTags implements GetAllTagUseCase {
  tagRepository: TagRepository;
  constructor(tagRepository: TagRepository) {
    this.tagRepository = tagRepository;
  }

  async execute(): Promise<Tag[]> {
    const result = await this.tagRepository.getTags();
    return result;
  }
}
