export default interface DeleteTagUseCase {
  execute(id: number): Promise<boolean>;
}
