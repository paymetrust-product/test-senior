export default interface DeleteCommentUseCase {
  execute(id: number): Promise<boolean>;
}
