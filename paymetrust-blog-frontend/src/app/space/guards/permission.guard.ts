import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthUserLocalStorageService } from 'src/app/services/auth-user-local-storage/auth-user-local-storage.service';
import { PermissionService } from 'src/core/admin/auth/services/PermissionService';

export const permissionGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authUserLocalStorageService = inject(AuthUserLocalStorageService);
  const permissionService = new PermissionService(authUserLocalStorageService.authUserLocalStorageSingletonService);
  return permissionService.checkPathPermission(state.url) ? true : router.navigate(["/space", "unauthorized"]);
};
