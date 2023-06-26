import { Controller, Get, Post, Put, Delete, Body, Param, Query } from "@nestjs/common";
import { CommentService } from "@application/services/comment.service";
import {Comment} from "@domain/entities/comment.entity";


@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  async findAll(): Promise<Comment[]> {
    return this.commentService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Comment | undefined> {
    return this.commentService.findById(id);
  }

  @Post()
  async create(@Body() comment: Comment): Promise<Comment> {
    return this.commentService.create(comment);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() comment: Comment): Promise<Comment | undefined> {
    return this.commentService.update(id, comment);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.commentService.delete(id);
  }

  @Get('created-after')
  async findArticlesCreatedAfter(@Query('date') date: string): Promise<Comment[]> {
    return this.commentService.findCommentCreatedAfter(new Date(date));
  }

  @Get('/article/:id')
  async findCommentsByArticleId(@Param('id') id: number): Promise<Comment | undefined> {
    return this.commentService.findCommentsByArticleId(id);
  }
}
