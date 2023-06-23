import Post from '../../../entities/Post';

export default interface GetAllPostUseCase {
  execute(): Promise<Post[]>;
}
