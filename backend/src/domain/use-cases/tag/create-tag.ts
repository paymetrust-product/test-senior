import Tag from '../../entities/Tag';
import TagRepository from '../../ports/repositories/tag.repository.port';
import CreateUserTagCase from '../../ports/use-cases/tag/create-tag';

export default class CreateTag implements CreateUserTagCase {
  tagRepository: TagRepository;
  constructor(tagRepository: TagRepository) {
    this.tagRepository = tagRepository;
  }

  async execute(user: Tag): Promise<Tag> {
    const result = await this.tagRepository.createTag(user);
    return result;
  }
}
