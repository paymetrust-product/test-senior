import Category from '../../entities/Category';
import CategoryRepository from '../../ports/repositories/category.repository.port';
import UpdateCategoryUseCase from '../../ports/use-cases/category/update-category';

export default class UpdateCategory implements UpdateCategoryUseCase {
  categoryRepository: CategoryRepository;
  constructor(categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository;
  }
  async execute(category: Category): Promise<Category | null> {
    if (!category.id) {
      throw new Error('Id is required ');
    }
    return await this.categoryRepository.updateCategory(category);
  }
}
