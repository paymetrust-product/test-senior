import { PermissionType } from "../entities/SignInResponse";
import AuthUserLocalStorageSingletonRepository from "../repositories/AuthUserLocalStorageSingletonRepository";

export class PermissionService {
  private permissionTypes: PermissionType[] = []
  constructor(private authUserLocalStorageSingletonRepository: AuthUserLocalStorageSingletonRepository) {
    if(this.authUserLocalStorageSingletonRepository.haveCurrentUser){
      const responseApiPermissions = this.authUserLocalStorageSingletonRepository.get().profile.role.permissions;

      this.permissionTypes = responseApiPermissions.map(responseApiPermission => {
        switch (responseApiPermission.name) {
          case 'SEE_ADMINS':
            return PermissionType.SEE_ADMINS;
            break;
          case 'MANAGE_ADMINS':
            return PermissionType.MANAGE_ADMINS;
            break;
          case 'MANAGE_ARTICLES':
            return PermissionType.MANAGE_ARTICLES;
            break;
          default:
            return null;
        }
      }).filter(permission => permission != null) as unknown as PermissionType[]
    }
  }

  checkPathPermission(path: string){
    switch(path){
      case 'space/roles':
        return this.permissionTypes.includes(PermissionType.MANAGE_ADMINS);
        break;
      case 'space/admins':
        return this.permissionTypes.includes(PermissionType.SEE_ADMINS);
        break;
      default:
        return false;
    }
  }

  checkFeaturePermission(path: string){
    switch(path){
      case PermissionType.MANAGE_ADMINS:
        return this.permissionTypes.includes(PermissionType.MANAGE_ADMINS);
        break;
      case PermissionType.SEE_ADMINS:
        return this.permissionTypes.includes(PermissionType.SEE_ADMINS);
        break;
      default:
        return false;
    }
  }
}
