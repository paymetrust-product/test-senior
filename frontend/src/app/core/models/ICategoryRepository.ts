import {Category} from "@core/interfaces/Category";
import {Observable} from "rxjs";

export interface ICategoryRepository {
  getCategories(): Observable<Category[]>;

  getCategory(id: number): Observable<Category>;

  addCategory(category: Category): Observable<Category>;

  updateCategory(category: Category): Observable<Category>;

  deleteCategory(id:  number): Observable<void>;
}
