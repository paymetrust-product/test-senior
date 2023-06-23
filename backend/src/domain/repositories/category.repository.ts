import CategoryDataSource from '../../infrastructure/interfaces/categorie-data-source';
import Category from '../entities/Category';
import CategoryRepository from '../ports/repositories/category.repository.port';

export class CategoryRepositoryImpl implements CategoryRepository {
  categorieDataSource: CategoryDataSource;

  constructor(categorieDataSource: CategoryDataSource) {
    this.categorieDataSource = categorieDataSource;
  }
  getCategoryById(id: number): Promise<Category | null> {
    return this.categorieDataSource.getById(id);
  }
  async createCategory(category: Category): Promise<Category> {
    const result = await this.categorieDataSource.create(category);
    return result;
  }
  async getCategories(): Promise<Category[]> {
    const result = await this.categorieDataSource.getAll();
    return result;
  }
  async deleteCategory(id: number): Promise<boolean> {
    return await this.categorieDataSource.deleteOne(id);
  }
  async updateCategory(category: Category): Promise<Category | null> {
    return await this.categorieDataSource.updateOne(category);
  }
}
