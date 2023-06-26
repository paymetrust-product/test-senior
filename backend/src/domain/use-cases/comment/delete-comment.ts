import CommentRepository from '../../ports/repositories/comment.repository.port';
import DeleteCommentUseCase from '../../ports/use-cases/comment/delete-comment';

export default class DeleteComment implements DeleteCommentUseCase {
  commentRepository: CommentRepository;
  constructor(commentRepository: CommentRepository) {
    this.commentRepository = commentRepository;
  }
  async execute(id: number): Promise<boolean> {
    return await this.commentRepository.deleteComment(id);
  }
}
