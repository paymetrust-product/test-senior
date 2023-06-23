import {Injectable} from '@angular/core';
import {ApiService} from "../api/api.service";
import {Article} from "@core/interfaces/Article";
import {Observable} from "rxjs";
import {ICategoryRepository} from "@core/models/ICategoryRepository";
import {Category} from "@core/interfaces/Category";

@Injectable({
  providedIn: 'root',
})
export class CategoryRepositoryService implements ICategoryRepository {
  constructor(private apiService: ApiService) {
  }

  addCategory(category: Category): Observable<Article> {
    return this.apiService.get('categories');
  }

  deleteCategory(id: number): Observable<void> {
    return this.apiService.delete('categories/' + id);
  }

  getCategory(id: number): Observable<Category> {
    return this.apiService.get('categories/' + id);
  }

  getCategories(): Observable<Category[]> {
    return this.apiService.get('categories');
  }

  updateCategory(category: Category): Observable<Category> {
    return this.apiService.put('categories/' + category.id, category);
  }
}
