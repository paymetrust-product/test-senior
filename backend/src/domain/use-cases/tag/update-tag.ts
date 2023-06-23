import Tag from '../../entities/Tag';
import TagRepository from '../../ports/repositories/tag.repository.port';
import UpdateTagUseCase from '../../ports/use-cases/tag/update-tag';

export default class UpdateTag implements UpdateTagUseCase {
  tagRepository: TagRepository;
  constructor(tagRepository: TagRepository) {
    this.tagRepository = tagRepository;
  }

  async execute(tag: Tag): Promise<Tag | null> {
    if (!tag.id) {
      throw new Error('Id is required ');
    }
    return await this.tagRepository.updateTag(tag);
  }
}
