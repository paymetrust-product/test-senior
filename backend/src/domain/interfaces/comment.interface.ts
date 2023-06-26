import {Comment} from "../entities/comment.entity";

export interface ICommentRepository{
  findAll(): Promise<Comment[]>
  findById(id: number): Promise<Comment | undefined>
  createComment(comment: Comment): Promise<Comment>
  updateComment(id: number, comment: Comment): Promise<Comment | undefined>
  deleteComment(id: number): Promise<void>
  findCommentCreatedAfter(date: Date): Promise<Comment[]>
  findCommentsByArticleId(articleId: number)
}