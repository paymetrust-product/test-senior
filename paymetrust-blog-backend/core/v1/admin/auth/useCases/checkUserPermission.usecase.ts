import { AdminRepository } from 'core/v1/admin/admin/repositories/admin.repository';
import { PermissionType } from '../../permissions/entities/permission.model';
import { DecodeAdminTokenUseCase } from './decodeAdminToken.usecase';

export class CheckUserPermissionUseCase {
  private decodeAdminTokenUseCase = new DecodeAdminTokenUseCase();
  constructor(private adminRepostory: AdminRepository) {}

  async execute(authorization: string, permissions: PermissionType[]) {
    const decodedAdminToken = await this.decodeAdminTokenUseCase.execute(
      authorization,
    );
    if (decodedAdminToken) {
      const admin = await this.adminRepostory.findById(decodedAdminToken.id);

      const adminPermissionsNames = admin.role.permissions.map(
        (permission) => permission.name,
      );
      for (const x in permissions) {
        if (!adminPermissionsNames.includes(permissions[x])) {
          return false;
        }
      }
      return true;
    }

    return false;
  }
}
