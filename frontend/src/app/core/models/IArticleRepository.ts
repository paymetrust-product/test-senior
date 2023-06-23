import {Article} from "../interfaces/Article";
import {Observable} from "rxjs";

export interface IArticleRepository {
  getArticles(): Observable<Article[]>;

  getArticle(id: number): Observable<Article>;

  addArticle(article: Article): Observable<Article>;

  updateArticle(article: Article): Observable<Article>;

  deleteArticle(id: number): Observable<void>;
}
