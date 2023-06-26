import {Article} from "../entities/article.entity";

export interface IArticleRepository{
  findAll(): Promise<Article[]>
  findById(id: number): Promise<Article | undefined>
  createArticle(article: Article): Promise<Article>
  updateArticle(id: number, article: Article): Promise<Article | undefined>
  deleteArticle(id: number): Promise<void>
  findArticlesByCategorie(categorieId: number)
}