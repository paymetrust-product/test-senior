import Tag from '../../../entities/Tag';

export default interface CreateUserTagCase {
  execute(tag: Tag): Promise<Tag>;
}
