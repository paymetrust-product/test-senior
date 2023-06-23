import CategoryRepository from '../../ports/repositories/category.repository.port';
import DeleteCategoryUseCase from '../../ports/use-cases/category/delete-category';

export default class DeleteCategory implements DeleteCategoryUseCase {
  categoryRepository: CategoryRepository;
  constructor(categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async execute(id: number): Promise<boolean> {
    return await this.categoryRepository.deleteCategory(id);
  }
}
