import { PermissionRepository } from '../repositories/permission.repository';

export class FindAllPermissionsUseCase {
  constructor(private permissionRepository: PermissionRepository) {}

  execute() {
    return this.permissionRepository.findAll();
  }
}
