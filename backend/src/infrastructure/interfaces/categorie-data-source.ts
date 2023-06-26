import Category from '../../domain/entities/Category';

export default interface CategoryDataSource {
  create(categori: Category): Promise<Category>;
  getAll(): Promise<Category[]>;
  getById(id: number): Promise<Category | null>;
  deleteOne(id: number): Promise<boolean>;
  updateOne(data: Category): Promise<Category | null>;
}
