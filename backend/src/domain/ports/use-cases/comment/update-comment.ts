import Comment from '../../../entities/Comment';

export default interface UpdateCommentUseCase {
  execute(comment: Comment): Promise<Comment | null>;
}
