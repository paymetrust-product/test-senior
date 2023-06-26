import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {  Repository } from 'typeorm';
import {Comment} from "@domain/entities/comment.entity";
import { ICommentRepository } from "@domain/interfaces/comment.interface";


@Injectable()
export class CommentRepository implements ICommentRepository{

  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}
  async findAll(): Promise<Comment[]> {
    return this.commentRepository.find();
  }

  async findById(id: number): Promise<Comment | undefined> {
    return this.commentRepository.findOne({ where: { id } });
  }

  async createComment(comment: Comment): Promise<Comment> {
    const newComment = this.commentRepository.create(comment);
    return this.commentRepository.save(newComment);
  }

  async updateComment(id: number, comment: Comment): Promise<Comment | undefined> {
    await this.commentRepository.update(id, comment);
    return this.commentRepository.findOne({ where: { id } });
  }

  async deleteComment(id: number): Promise<void> {
    await this.commentRepository.delete(id);
  }

  async findCommentCreatedAfter(date: Date): Promise<Comment[]> {
     return this.commentRepository.createQueryBuilder('comment')
      .where('comment.createdAt > :date', { date })
      .orderBy('comment.createdAt', 'DESC')
      .getMany();
  }

  async findCommentsByArticleId(articleId: number) {
    return this.commentRepository.find({ where: { article: { id: articleId } } });
  }

}