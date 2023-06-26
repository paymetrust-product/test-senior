import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentRepository } from "@infrastructure/repositories/comment.repository";
import {Comment} from "@domain/entities/comment.entity";
import { CommentService } from "@application/services/comment.service";
import { CommentController } from "@interfaces/controllers/comment.controller";

@Module({
  imports:[TypeOrmModule.forFeature([Comment])],
  controllers : [CommentController],
  providers:
    [
      CommentService,
      {
        provide: 'ICommentRepository',
        useClass: CommentRepository,
      },
    ],

})

export class CommentModule{}