import Category from '../../entities/Category';

export default interface CategoryRepository {
  createCategory(category: Category): Promise<Category>;
  getCategories(): Promise<Category[]>;
  getCategoryById(id: number): Promise<Category | null>;
  deleteCategory(id: number): Promise<boolean>;
  updateCategory(category: Category): Promise<Category | null>;
}
