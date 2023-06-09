import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { FindRoleByIdUseCase } from '../../../../core/v1/admin/roles/useCases/findRoleById.usecase ';
import { RoleService } from './role.service';
import { FindAllRolesUseCase } from 'core/v1/admin/roles/useCases/findAllRoles.usecase ';
import { AdminPermission } from '../auth/decorators/adminPermission.decorator';
import { PermissionType } from 'core/v1/admin/permissions/entities/permission.model';
import { AuthGuard } from '../auth/guards/auth.guard';
import { PermissionGuard } from '../auth/guards/permission.guard';
import { CreateRoleUseCase } from 'core/v1/admin/roles/useCases/createRole.usecase';
import { Admin } from '../auth/decorators/admin.decorator';
import { authAdminDto } from '../auth/dtos/auth.dto';
import { EditRoleDto } from './dtos/role.dto';
import { UpdateRoleUseCase } from 'core/v1/admin/roles/useCases/updateRole.usecase';
import { DeleteRoleUseCase } from 'core/v1/admin/roles/useCases/deleteRole.usecase ';

@Controller('v1/roles')
export class RoleController {
  private findAllRolesUseCase: FindAllRolesUseCase;
  private createRoleUseCase: CreateRoleUseCase;
  private findRoleByIdUseCase: FindRoleByIdUseCase;
  private updateRoleUseCase: UpdateRoleUseCase;
  private deleteRoleUseCase: DeleteRoleUseCase;
  constructor(private roleService: RoleService) {
    this.findAllRolesUseCase = new FindAllRolesUseCase(this.roleService);
    this.createRoleUseCase = new CreateRoleUseCase(this.roleService);
    this.findRoleByIdUseCase = new FindRoleByIdUseCase(this.roleService);
    this.updateRoleUseCase = new UpdateRoleUseCase(this.roleService);
    this.deleteRoleUseCase = new DeleteRoleUseCase(this.roleService);
  }

  @AdminPermission(PermissionType.MANAGE_ADMINS)
  @UseGuards(AuthGuard, PermissionGuard)
  @Get('all')
  async all() {
    return this.findAllRolesUseCase.execute();
  }

  @AdminPermission(PermissionType.MANAGE_ADMINS)
  @UseGuards(AuthGuard, PermissionGuard)
  @Post('create')
  async create(@Body() body: EditRoleDto, @Admin() admin: authAdminDto) {
    return this.createRoleUseCase.execute({
      label: body.label,
      permissions: body.permissions,
      creatorId: admin.id,
    });
  }

  @AdminPermission(PermissionType.MANAGE_ADMINS)
  @UseGuards(AuthGuard, PermissionGuard)
  @Get(':id')
  async findOneById(@Param('id', ParseIntPipe) id: number) {
    return this.findRoleByIdUseCase.execute(id);
  }

  @AdminPermission(PermissionType.MANAGE_ADMINS)
  @UseGuards(AuthGuard, PermissionGuard)
  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: EditRoleDto,
  ) {
    return this.updateRoleUseCase.execute(id, {
      label: body.label,
      permissions: body.permissions,
    });
  }

  @AdminPermission(PermissionType.MANAGE_ADMINS)
  @UseGuards(AuthGuard, PermissionGuard)
  @Delete('delete/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteRoleUseCase.execute(id);
  }
}
