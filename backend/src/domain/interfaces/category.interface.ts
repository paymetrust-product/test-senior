import {Category} from "../entities/category.entity";

export interface ICategoryRepository{
  findAll(): Promise<Category[]>
  findById(id: number): Promise<Category | undefined>
  createCategory(category: Category): Promise<Category>
  updateCategory(id: number, category: Category): Promise<Category | undefined>
  deleteCategory(id: number): Promise<void>
  findArticlesByCategorie(articleId: any)
}