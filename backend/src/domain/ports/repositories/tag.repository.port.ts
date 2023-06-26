import Tag from '../../entities/Tag';

export default interface TagRepository {
  createTag(tag: Tag): Promise<Tag>;
  getTags(): Promise<Tag[]>;
  getTagById(id: number): Promise<Tag | null>;
  deleteTag(id: number): Promise<boolean>;
  updateTag(tag: Tag): Promise<Tag | null>;
}
