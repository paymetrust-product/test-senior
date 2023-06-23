import Comment from '../../entities/Comment';
import CommentRepository from '../../ports/repositories/comment.repository.port';
import CreateCommentUserCase from '../../ports/use-cases/comment/create-comment';

export default class CreateComment implements CreateCommentUserCase {
  commentRepository: CommentRepository;
  constructor(commentRepository: CommentRepository) {
    this.commentRepository = commentRepository;
  }

  async execute(comment: Comment): Promise<Comment> {
    const result = await this.commentRepository.createComment(comment);
    return result;
  }
}
