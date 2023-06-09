import { CheckUserPermissionUseCase } from './../../../../../core/v1/admin/auth/useCases/checkUserPermission.usecase';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AdminService } from '../../admin/admin.service';
import { PermissionType } from 'core/v1/admin/permissions/entities/permission.model';
import { Reflector } from '@nestjs/core';

@Injectable()
export class PermissionGuard implements CanActivate {
  private checkUserPermissionUseCase: CheckUserPermissionUseCase;

  constructor(
    private reflector: Reflector,
    private adminService: AdminService,
  ) {
    this.checkUserPermissionUseCase = new CheckUserPermissionUseCase(
      adminService,
    );
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const permissions = this.reflector.get(
      'permissions',
      context.getHandler(),
    ) as PermissionType[];
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers?.authorization;
    if (authorization) {
      return this.checkUserPermissionUseCase.execute(
        authorization,
        permissions,
      );
    }

    return false;
  }
}
