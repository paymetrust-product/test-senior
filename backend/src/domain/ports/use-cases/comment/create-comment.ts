import Comment from '../../../entities/Comment';

export default interface CreateCommentUserCase {
  execute(comment: Comment): Promise<Comment>;
}
