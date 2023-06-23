export default interface DeletePostUseCase {
  execute(id: number): Promise<boolean>;
}
