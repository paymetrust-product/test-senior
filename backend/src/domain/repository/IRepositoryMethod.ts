
export interface IRepositoryMethods<T = any> {
  create(dto: T);
  read();
  readById(id: string);
  update(dto: T);
  delete(id: string);
}
