import Category from '../../../entities/Category';

export default interface GetAllCategoryUseCase {
  execute(): Promise<Category[]>;
}
