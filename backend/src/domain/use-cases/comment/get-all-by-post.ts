import Comment from '../../entities/Comment';
import CommentRepository from '../../ports/repositories/comment.repository.port';
import GetAllCommentByPostUseCase from '../../ports/use-cases/comment/get-all-by-post';

export class GetAllCommentByPosts implements GetAllCommentByPostUseCase {
  commentRepository: CommentRepository;
  constructor(commentRepository: CommentRepository) {
    this.commentRepository = commentRepository;
  }

  async execute(postId: number): Promise<Comment[] | null> {
    const result = await this.commentRepository.getCommentsbyPost(postId);
    return result;
  }
}
