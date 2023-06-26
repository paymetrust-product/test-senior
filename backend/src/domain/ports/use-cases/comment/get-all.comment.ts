import Comment from '../../../entities/Comment';

export default interface GetAllCommentUseCase {
  execute(): Promise<Comment[]>;
}
