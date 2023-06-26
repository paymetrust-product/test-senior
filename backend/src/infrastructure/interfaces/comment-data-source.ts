import Comment from '../../domain/entities/Comment';

export default interface CommentDataSource {
  create(comment: Comment): Promise<Comment>;
  getAll(): Promise<Comment[]>;
  getAllByPost(postId: number): Promise<Comment[] | null>;
  deleteOne(id: number): Promise<boolean>;
  updateOne(data: Comment): Promise<Comment | null>;
}
