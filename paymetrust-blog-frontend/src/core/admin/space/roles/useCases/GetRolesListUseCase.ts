import { RoleRepository } from './../repositories/RoleRepository';

export class GetRolesListUseCase {
  constructor(private roleRepository: RoleRepository) {}
  execute(){
    return this.roleRepository.getRoles();
  }
}
