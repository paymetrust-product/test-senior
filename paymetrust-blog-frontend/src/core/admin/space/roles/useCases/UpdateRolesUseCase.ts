import { RoleFormRequest } from '../entities/RoleRequest';
import { RoleRepository } from './../repositories/RoleRepository';

export class UpdateRolesUseCase {
  constructor(private roleRepository: RoleRepository) {}
  execute(id: number, roleFormRequest: RoleFormRequest){
    return this.roleRepository.updateRole(id, roleFormRequest);
  }
}
