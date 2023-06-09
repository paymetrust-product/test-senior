import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthUserLocalStorageService } from 'src/app/services/auth-user-local-storage/auth-user-local-storage.service';
import AuthPermissionCoreService from 'src/core/admin/auth/services/AuthPermissionCoreService';

export const authenticatedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const authUserLocalStorageService = inject(AuthUserLocalStorageService)
  const authPermissionCoreService = new AuthPermissionCoreService(authUserLocalStorageService.authUserLocalStorageSingletonService)
  return authPermissionCoreService.checkAuthenticated() ? true : router.navigate(["/auth", "login"]);
};
