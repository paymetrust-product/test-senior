import { RoleRepository } from '../repositories/RoleRepository';

export class GetRoleUseCase {
  constructor(private roleRepository: RoleRepository) {}
  execute(id: number){
    return this.roleRepository.getRole(id);
  }
}
