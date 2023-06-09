import { RoleRepository } from './../repositories/RoleRepository';

export class DeleteRoleUseCase {
  constructor(private roleRepository: RoleRepository) {}
  execute(id: number){
    return this.roleRepository.deleteRole(id);
  }
}
