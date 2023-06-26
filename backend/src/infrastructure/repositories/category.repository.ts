import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from "@domain/entities/category.entity";
import { ICategoryRepository } from "@domain/interfaces/category.interface";

@Injectable()
export class CategoryRepository implements ICategoryRepository{

  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async findById(id: number): Promise<Category | undefined> {
    return this.categoryRepository.findOne({ where: { id } });
  }

  async createCategory(category: Category): Promise<Category> {
    const newCategory = this.categoryRepository.create(category);
    return this.categoryRepository.save(newCategory);
  }

  async updateCategory(id: number, category: Category): Promise<Category | undefined> {
    await this.categoryRepository.update(id, category);
    return this.categoryRepository.findOne({ where: { id } });
  }

  async deleteCategory(id: number): Promise<void> {
    await this.categoryRepository.delete(id);
  }

  findArticlesByCategorie(articleId: any) {
    return this.categoryRepository.find({ where: { articles: { id: articleId } } });
  }
}