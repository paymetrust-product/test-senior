import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthController } from 'src/v1/admin/auth/auth.controller';
import { AuthService } from 'src/v1/admin/auth/auth.service';
import { AdminInterceptor } from './auth/interceptors/admin.interceptor';
import { RoleService } from './roles/role.service';
import { RoleController } from './roles/role.controller';
import { PermissionController } from './permissions/permission.controller';
import { PermissionService } from './permissions/permission.service';
import { AdminService } from './admin/admin.service';
import { AdminController } from './admin/admin.controller';
import { ProfileService } from './profile/profile.service';
import { ProfileController } from './profile/profile.controller';

@Module({
  imports: [PrismaModule],
  controllers: [
    AuthController,
    RoleController,
    PermissionController,
    AdminController,
    ProfileController,
  ],
  providers: [
    AuthService,
    RoleService,
    PermissionService,
    AdminService,
    ProfileService,
    {
      provide: APP_INTERCEPTOR,
      useClass: AdminInterceptor,
    },
  ],
})
export class AdminModule {}
