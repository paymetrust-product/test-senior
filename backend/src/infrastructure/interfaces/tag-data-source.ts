import Tag from '../../domain/entities/Tag';

export default interface TagDataSource {
  create(tag: Tag): Promise<Tag>;
  getAll(): Promise<Tag[]>;
  getById(id: number): Promise<Tag | null>;
  deleteOne(id: number): Promise<boolean>;
  updateOne(data: Tag): Promise<Tag | null>;
}
