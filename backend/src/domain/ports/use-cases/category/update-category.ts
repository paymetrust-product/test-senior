import Category from '../../../entities/Category';

export default interface UpdateCategoryUseCase {
  execute(category: Category): Promise<Category | null>;
}
