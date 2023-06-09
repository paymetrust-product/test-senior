import { FindAllPermissionsUseCase } from './../../../../core/v1/admin/permissions/useCases/findAllPermissions.usecase';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AdminPermission } from '../auth/decorators/adminPermission.decorator';
import { PermissionType } from 'core/v1/admin/permissions/entities/permission.model';
import { AuthGuard } from '../auth/guards/auth.guard';
import { PermissionGuard } from '../auth/guards/permission.guard';
import { PermissionService } from './permission.service';

@Controller('v1/permissions')
export class PermissionController {
  private findAllPermissionsUseCase: FindAllPermissionsUseCase;
  constructor(private permissionService: PermissionService) {
    this.findAllPermissionsUseCase = new FindAllPermissionsUseCase(
      this.permissionService,
    );
  }

  @AdminPermission(PermissionType.MANAGE_ADMINS)
  @UseGuards(AuthGuard, PermissionGuard)
  @Get('all')
  async all() {
    return this.findAllPermissionsUseCase.execute();
  }
}
