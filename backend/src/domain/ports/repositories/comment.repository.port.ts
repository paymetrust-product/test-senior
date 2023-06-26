import Comment from '../../entities/Comment';

export default interface CommentRepository {
  createComment(Comment: Comment): Promise<Comment>;
  getComments(): Promise<Comment[]>;
  getCommentsbyPost(postId: number): Promise<Comment[] | null>;
  deleteComment(id: number): Promise<boolean>;
  updateComment(Comment: Comment): Promise<Comment | null>;
}
