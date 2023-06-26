import TagDataSource from '../../infrastructure/interfaces/tag-data-source';
import Tag from '../entities/Tag';
import TagRepository from '../ports/repositories/tag.repository.port';

export class TagRepositoryImpl implements TagRepository {
  tagDataSource: TagDataSource;

  constructor(tagDataSource: TagDataSource) {
    this.tagDataSource = tagDataSource;
  }
  getTagById(id: number): Promise<Tag | null> {
    return this.tagDataSource.getById(id);
  }
  async createTag(tag: Tag): Promise<Tag> {
    const result = await this.tagDataSource.create(tag);
    return result;
  }
  async getTags(): Promise<Tag[]> {
    const result = await this.tagDataSource.getAll();
    return result;
  }
  async deleteTag(id: number): Promise<boolean> {
    return await this.tagDataSource.deleteOne(id);
  }
  async updateTag(tag: Tag): Promise<Tag | null> {
    return await this.tagDataSource.updateOne(tag);
  }
}
