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
import { CreateAdminUseCase } from 'core/v1/admin/admin/useCases/createAdmin.usecase';
import { DeleteAdminUseCase } from 'core/v1/admin/admin/useCases/deleteAdmin.usecase';
import { FindAdminByIdUseCase } from 'core/v1/admin/admin/useCases/finAdminsByIdusecase';
import { FindAllAdminUseCase } from 'core/v1/admin/admin/useCases/findAllAdmins.usecase';
import { UpdateAdminUseCase } from 'core/v1/admin/admin/useCases/updateAdmin.usecase';
import { AdminService } from './admin.service';
import { AdminPermission } from '../auth/decorators/adminPermission.decorator';
import { PermissionType } from 'core/v1/admin/permissions/entities/permission.model';
import { AuthGuard } from '../auth/guards/auth.guard';
import { PermissionGuard } from '../auth/guards/permission.guard';
import { EditAdminDto } from './dtos/admin.dto';

@Controller('v1/admins')
export class AdminController {
  private findAllAdminUseCase: FindAllAdminUseCase;
  private createAdminUseCase: CreateAdminUseCase;
  private findAdminByIdUseCase: FindAdminByIdUseCase;
  private updateAdminUseCase: UpdateAdminUseCase;
  private deleteAdminUseCase: DeleteAdminUseCase;
  constructor(private adminService: AdminService) {
    this.findAllAdminUseCase = new FindAllAdminUseCase(this.adminService);
    this.createAdminUseCase = new CreateAdminUseCase(this.adminService);
    this.findAdminByIdUseCase = new FindAdminByIdUseCase(this.adminService);
    this.updateAdminUseCase = new UpdateAdminUseCase(this.adminService);
    this.deleteAdminUseCase = new DeleteAdminUseCase(this.adminService);
  }

  @AdminPermission(PermissionType.SEE_ADMINS)
  @UseGuards(AuthGuard, PermissionGuard)
  @Get('all')
  async all() {
    return this.findAllAdminUseCase.execute();
  }

  @AdminPermission(PermissionType.MANAGE_ADMINS)
  @UseGuards(AuthGuard, PermissionGuard)
  @Post('create')
  async create(@Body() body: EditAdminDto) {
    return this.createAdminUseCase.execute({
      username: body.username,
      password: body.password,
      roleId: body.roleId,
    });
  }

  @AdminPermission(PermissionType.SEE_ADMINS)
  @UseGuards(AuthGuard, PermissionGuard)
  @Get(':id')
  async findOneById(@Param('id', ParseIntPipe) id: number) {
    return this.findAdminByIdUseCase.execute(id);
  }

  @AdminPermission(PermissionType.MANAGE_ADMINS)
  @UseGuards(AuthGuard, PermissionGuard)
  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: EditAdminDto,
  ) {
    return this.updateAdminUseCase.execute(id, {
      username: body.username,
      password: body.password,
      roleId: body.roleId,
    });
  }

  @AdminPermission(PermissionType.MANAGE_ADMINS)
  @UseGuards(AuthGuard, PermissionGuard)
  @Delete('delete/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteAdminUseCase.execute(id);
  }
}
