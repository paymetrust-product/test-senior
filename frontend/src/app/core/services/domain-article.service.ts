import {Inject, Injectable, InjectionToken} from '@angular/core';
import {IArticleRepository} from "../models/IArticleRepository";
import {Article} from "../interfaces/Article";
import {Observable} from "rxjs";

export const ARTICLE_REPOSITORY_TOKEN = new InjectionToken<IArticleRepository>('ArticleRepository');

@Injectable({
  providedIn: 'root'
})
export class DomainArticleService {

  constructor(@Inject(ARTICLE_REPOSITORY_TOKEN) private articleRepository: IArticleRepository) {
  }

  getArticles(): Observable<Article[]> {
    return this.articleRepository.getArticles();
  }

  getArticle(id: number): Observable<Article> {
    return this.articleRepository.getArticle(id);
  }

  createArticle(article: Article): Observable<Article> {
    return this.articleRepository.addArticle(article);
  }

  updateArticle(article: Article): Observable<Article> {
    return this.articleRepository.updateArticle(article);
  }

  deleteArticle(id: number): Observable<void> {
    return this.articleRepository.deleteArticle(id);
  }
}
