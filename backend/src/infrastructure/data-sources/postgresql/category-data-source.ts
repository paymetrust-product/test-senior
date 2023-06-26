import { plainToClass } from 'class-transformer';
import Category from '../../../domain/entities/Category';
import User from '../../../domain/entities/User';
import CategoryDataSource from '../../interfaces/categorie-data-source';
import UserDataSource from '../../interfaces/user-data-source';
import { AppDataSource } from './data-source';
import { CategoryModel } from './models/Category';
import UserModel from './models/User';

export default class CategoryDataSourceImpl implements CategoryDataSource {
  appDataSource = AppDataSource;

  async getById(id: number): Promise<Category | null> {
    const categoryModel: CategoryModel | null = await this.appDataSource.manager.findOneBy(
      CategoryModel,
      { id: id }
    );
    const categorie = plainToClass(Category, categoryModel);
    return categorie;
  }

  async create(categorie: Category): Promise<Category> {
    const categoryModel = plainToClass(CategoryModel, categorie);
    await this.appDataSource.manager.save(categoryModel);
    return categoryModel;
  }

  async getAll(): Promise<Category[]> {
    const categoryModels: CategoryModel[] = await this.appDataSource.manager.find(
      CategoryModel
    );
    return categoryModels.map((categoryModel) => {
      const categorie = plainToClass(Category, categoryModel);
      return categorie;
    });
  }

  async deleteOne(id: number): Promise<boolean> {
    const categoryModel: CategoryModel | null = await this.appDataSource.manager.findOneBy(
      CategoryModel,
      { id }
    );

    if (!categoryModel) {
      return false;
    }
    await this.appDataSource.manager.remove(categoryModel);
    return true;
  }

  async updateOne(data: Category): Promise<Category | null> {
    let categoryModel: CategoryModel | null = await this.appDataSource.manager.findOneBy(
      CategoryModel,
      { id: data.id }
    );
    if (!categoryModel) {
      return null;
    }
    categoryModel = plainToClass(CategoryModel, data);
    await this.appDataSource.manager.save(categoryModel);
    return data;
  }
}
