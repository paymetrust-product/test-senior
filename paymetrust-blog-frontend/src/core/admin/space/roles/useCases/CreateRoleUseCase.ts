import { RoleFormRequest } from '../entities/RoleRequest';
import { RoleRepository } from '../repositories/RoleRepository';

export class CreateRoleUseCase {
  constructor(private roleRepository: RoleRepository) {}
  execute(roleFormRequest: RoleFormRequest){
    return this.roleRepository.createRole(roleFormRequest);
  }
}
