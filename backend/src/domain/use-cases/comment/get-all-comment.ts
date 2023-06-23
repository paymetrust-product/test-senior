import Comment from '../../entities/Comment';
import Tag from '../../entities/Tag';
import CommentRepository from '../../ports/repositories/comment.repository.port';
import TagRepository from '../../ports/repositories/tag.repository.port';
import GetAllCommentUseCase from '../../ports/use-cases/comment/get-all.comment';
import GetAllTagUseCase from '../../ports/use-cases/tag/get-all.tag';

export class GetAllComments implements GetAllCommentUseCase {
  commentRepository: CommentRepository;
  constructor(commentRepository: CommentRepository) {
    this.commentRepository = commentRepository;
  }

  async execute(): Promise<Comment[]> {
    const result = await this.commentRepository.getComments();
    return result;
  }
}
