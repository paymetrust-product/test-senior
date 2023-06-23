import Category from '../../../entities/Category';

export default interface CreateCategoryUseCase {
  execute(category: Category): Promise<Category>;
}
