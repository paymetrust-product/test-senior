import { RoleUpdateRequest } from '../entities/roleRequest';
import { RoleRepository } from '../repositories/role.repository';

export class UpdateRoleUseCase {
  constructor(private roleRepository: RoleRepository) {}

  execute(id: number, role: RoleUpdateRequest) {
    try {
      return this.roleRepository.update(id, role);
    } catch (e: any) {
      throw e;
    }
  }
}
