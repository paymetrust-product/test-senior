export default interface ComparePasswordUseCase {
  execute(plainPassword: string, hashPassword: string): boolean;
}
