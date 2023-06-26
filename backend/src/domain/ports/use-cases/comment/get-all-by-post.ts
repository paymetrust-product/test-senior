import Comment from '../../../entities/Comment';

export default interface GetAllCommentByPostUseCase {
  execute(postId: number): Promise<Comment[] | null>;
}
