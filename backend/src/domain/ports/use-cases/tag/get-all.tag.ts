import Tag from '../../../entities/Tag';

export default interface GetAllTagUseCase {
  execute(): Promise<Tag[]>;
}
