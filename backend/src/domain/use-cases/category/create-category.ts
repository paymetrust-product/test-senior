import Category from '../../entities/Category';
import CategoryRepository from '../../ports/repositories/category.repository.port';
import CreateCategoryUseCase from '../../ports/use-cases/category/create-category';

export default class CreatCategory implements CreateCategoryUseCase {
  categoryRepository: CategoryRepository;
  constructor(categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async execute(categorie: Category): Promise<Category> {
    const result = await this.categoryRepository.createCategory(categorie);
    return result;
  }
}
