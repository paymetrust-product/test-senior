export default interface DeleteCategoryUseCase {
  execute(id: number): Promise<boolean>;
}
