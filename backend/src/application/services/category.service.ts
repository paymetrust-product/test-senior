import { Injectable , Inject} from '@nestjs/common';
import {Category} from "@domain/entities/category.entity";
import {ICategoryRepository} from "@domain/interfaces/category.interface";

@Injectable()
export class CategoryService {
  constructor(
    @Inject('ICategoryRepository')
    private readonly iCategoryRepository: ICategoryRepository,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.iCategoryRepository.findAll()
  }

  async findById(id: number): Promise<Category | undefined> {
    return this.iCategoryRepository.findById(id);
  }

  async create(category: Category): Promise<Category> {
    return this.iCategoryRepository.createCategory(category);
  }

  async update(id: number, category: Category): Promise<Category | undefined> {
    return this.iCategoryRepository.updateCategory(id,category);
  }

  async delete(id: number): Promise<void> {
    await this.iCategoryRepository.deleteCategory(id);
  }

  async findArticlesByCategorie(articleId: any) {
    return this.iCategoryRepository.findArticlesByCategorie(articleId);
  }
}
