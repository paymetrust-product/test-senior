import CommentDataSource from '../../infrastructure/interfaces/comment-data-source';
import Comment from '../entities/Comment';
import CommentRepository from '../ports/repositories/comment.repository.port';

export class CommentRepositoryImpl implements CommentRepository {
  commentDataSource: CommentDataSource;

  constructor(commentDataSource: CommentDataSource) {
    this.commentDataSource = commentDataSource;
  }
  async createComment(Comment: Comment): Promise<Comment> {
    const result = await this.commentDataSource.create(Comment);
    return result;
  }
  async getComments(): Promise<Comment[]> {
    const result = await this.commentDataSource.getAll();
    return result;
  }

  async getCommentsbyPost(postId: number): Promise<Comment[] | null> {
    const result = await this.commentDataSource.getAllByPost(postId);
    return result;
  }

  async deleteComment(id: number): Promise<boolean> {
    return await this.commentDataSource.deleteOne(id);
  }
  async updateComment(Comment: Comment): Promise<Comment | null> {
    return await this.commentDataSource.updateOne(Comment);
  }
}
