import { PermissionRepository } from './../repositories/PermissionRepository';

export class GetPermissionsListUseCase{
  constructor(private permissionRepository: PermissionRepository) {}

  execute(){
    return this.permissionRepository.permissionsList();
  }
}
