import { Injectable,Inject  } from '@nestjs/common';
import {Article} from "@domain/entities/article.entity";
import {IArticleRepository} from "@domain/interfaces/article.interface";

@Injectable()
export class ArticleService {
  constructor(
    @Inject('IArticleRepository')
    private readonly iArticleRepository: IArticleRepository,
  ) {}

  async findAll(): Promise<Article[]> {
    return this.iArticleRepository.findAll()
  }

  async findById(id: number): Promise<Article | undefined> {
    return this.iArticleRepository.findById(id);
  }

  async create(article: Article): Promise<Article> {
    return this.iArticleRepository.createArticle(article);
  }

  async update(id: number, article: Article): Promise<Article | undefined> {
    return this.iArticleRepository.updateArticle(id,article);
  }

  async delete(id: number): Promise<void> {
    await this.iArticleRepository.deleteArticle(id);
  }

  async findArticlesByCategorie(categorieId: number) {
    return this.iArticleRepository.findArticlesByCategorie(categorieId);
  }
}
