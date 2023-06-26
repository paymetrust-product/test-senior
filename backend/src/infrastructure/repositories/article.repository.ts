import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IArticleRepository } from "@domain/interfaces/article.interface";
import { Article } from "@domain/entities/article.entity";


@Injectable()
export class ArticleRepository implements IArticleRepository{
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  async findAll(): Promise<Article[]> {
    return this.articleRepository.find();
  }

  async findById(id: number): Promise<Article | undefined> {
    return this.articleRepository.findOne({ where: { id } });
  }

  async createArticle(article: Article): Promise<Article> {
    const newArticle = this.articleRepository.create(article);
    return this.articleRepository.save(newArticle);
  }

  async updateArticle(id: number, article: Article): Promise<Article | undefined> {
    await this.articleRepository.update(id, article);
    return this.articleRepository.findOne({ where: { id } });
  }

  async deleteArticle(id: number): Promise<void> {
    await this.articleRepository.delete(id);
  }

  findArticlesByCategorie(categorieId: number) {
    return this.articleRepository.createQueryBuilder('article')
      .where('article.categoriesId  = :categorieId', { categorieId })
      .orderBy('article.createdAt', 'DESC')
      .getMany();
  }
}