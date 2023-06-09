import { RoleCreateRequest } from '../entities/roleRequest';
import { RoleRepository } from '../repositories/role.repository';

export class CreateRoleUseCase {
  constructor(private roleRepository: RoleRepository) {}

  execute(role: RoleCreateRequest) {
    return this.roleRepository.create(role);
  }
}
