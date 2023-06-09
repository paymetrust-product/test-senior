import { RoleRepository } from '../repositories/role.repository';

export class DeleteRoleUseCase {
  constructor(private roleRepository: RoleRepository) {}

  execute(id: number) {
    try {
      return this.roleRepository.delete(id);
    } catch (e: any) {
      throw e;
    }
  }
}
