import {Inject, Injectable, InjectionToken} from '@angular/core';
import {ICategoryRepository} from "../models/ICategoryRepository";
import {Category} from "../interfaces/Category";
import {Observable} from "rxjs";

export const CATEGORY_REPOSITORY_TOKEN = new InjectionToken<ICategoryRepository>('CategoryRepository');

@Injectable({
  providedIn: 'root'
})
export class DomainCategoryService {

  constructor(@Inject(CATEGORY_REPOSITORY_TOKEN) private categoryRepository: ICategoryRepository) {
  }

  getCategories(): Observable<Category[]> {
    return this.categoryRepository.getCategories();
  }

  getCategory(id: number): Observable<Category> {
    return this.categoryRepository.getCategory(id);
  }

  createCategory(category: Category): Observable<Category> {
    return this.categoryRepository.addCategory(category);
  }

  updateCategory(category: Category): Observable<Category> {
    return this.categoryRepository.updateCategory(category);
  }

  deleteCategory(id: number): Observable<void> {
    return this.categoryRepository.deleteCategory(id);
  }
}
