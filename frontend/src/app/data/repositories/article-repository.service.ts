import {Injectable} from '@angular/core';
import {IArticleRepository} from "@core/models/IArticleRepository";
import {ApiService} from "../api/api.service";
import {Article} from "@core/interfaces/Article";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ArticleRepositoryService implements IArticleRepository {
  constructor(private apiService: ApiService) {
  }

  addArticle(article: Article): Observable<Article> {
    return this.apiService.get('articles');
  }

  deleteArticle(id: number): Observable<void> {
    return this.apiService.delete('articles/' + id);
  }

  getArticle(id: number): Observable<Article> {
    return this.apiService.get('articles/' + id);
  }

  getArticles(): Observable<Article[]> {
    return this.apiService.get('articles');
  }

  updateArticle(article: Article): Observable<Article> {
    return this.apiService.put('articles/' + article.id, article);
  }
}
