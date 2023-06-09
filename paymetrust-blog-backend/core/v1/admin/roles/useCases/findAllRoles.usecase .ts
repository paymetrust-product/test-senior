import { RoleRepository } from '../repositories/role.repository';

export class FindAllRolesUseCase {
  constructor(private roleRepository: RoleRepository) {}

  execute() {
    return this.roleRepository.findAll();
  }
}
