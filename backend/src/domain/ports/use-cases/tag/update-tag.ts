import Tag from '../../../entities/Tag';

export default interface UpdateTagUseCase {
  execute(tag: Tag): Promise<Tag | null>;
}
