import Category from '../../entities/Category';
import CategoryRepository from '../../ports/repositories/category.repository.port';
import GetAllCategoryUseCase from '../../ports/use-cases/category/get-all-category';

export class GetAllCategories implements GetAllCategoryUseCase {
  categoryRepository: CategoryRepository;
  constructor(categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async execute(): Promise<Category[]> {
    const result = await this.categoryRepository.getCategories();
    return result;
  }
}
