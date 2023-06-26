import Comment from '../../entities/Comment';
import Tag from '../../entities/Tag';
import CommentRepository from '../../ports/repositories/comment.repository.port';
import TagRepository from '../../ports/repositories/tag.repository.port';
import UpdateCommentUseCase from '../../ports/use-cases/comment/update-comment';
import UpdateTagUseCase from '../../ports/use-cases/tag/update-tag';

export default class UpdateComment implements UpdateCommentUseCase {
  commentRepository: CommentRepository;
  constructor(commentRepository: CommentRepository) {
    this.commentRepository = commentRepository;
  }

  async execute(tag: Comment): Promise<Comment | null> {
    if (!tag.id) {
      throw new Error('Id is required ');
    }
    return await this.commentRepository.updateComment(tag);
  }
}
