import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleService } from "@application/services/article.service";
import {ArticleController} from "@interfaces/controllers/article.controller";
import { ArticleRepository } from "@infrastructure/repositories/article.repository";
import { Article } from "@domain/entities/article.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  controllers: [ArticleController],
  providers: [
    ArticleService,
    {
      provide: 'IArticleRepository',
      useClass: ArticleRepository,
    },
  ],
})
export class ArticleModule {}
