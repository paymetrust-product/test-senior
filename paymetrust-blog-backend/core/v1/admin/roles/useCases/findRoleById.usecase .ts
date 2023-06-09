import { RoleRepository } from '../repositories/role.repository';

export class FindRoleByIdUseCase {
  constructor(private roleRepository: RoleRepository) {}

  execute(roleId: number) {
    try {
      return this.roleRepository.findById(roleId);
    } catch (e: any) {
      throw e;
    }
  }
}
