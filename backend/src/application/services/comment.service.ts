import { Injectable,Inject } from '@nestjs/common';
import {Comment} from "@domain/entities/comment.entity";
import {ICommentRepository} from "@domain/interfaces/comment.interface";



@Injectable()
export class CommentService {
  constructor(
    @Inject('ICommentRepository')
    private readonly iCommentRepository: ICommentRepository,
  ) {}

  async findAll(): Promise<Comment[]> {
    return this.iCommentRepository.findAll()
  }

  async findById(id: number): Promise<Comment | undefined> {
    return this.iCommentRepository.findById(id);
  }

  async create(comment: Comment): Promise<Comment> {
    return this.iCommentRepository.createComment(comment);
  }

  async update(id: number, comment: Comment): Promise<Comment | undefined> {
    return this.iCommentRepository.updateComment(id,comment);
  }

  async delete(id: number): Promise<void> {
    await this.iCommentRepository.deleteComment(id);
  }

  async findCommentCreatedAfter(date: Date): Promise<Comment[]> {
    return this.iCommentRepository.findCommentCreatedAfter(date);
  }

  async findCommentsByArticleId(articleId: number) {
    return this.iCommentRepository.findCommentsByArticleId(articleId);
  }
}
