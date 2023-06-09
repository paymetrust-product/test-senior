import { Injectable } from '@nestjs/common';
import { PermissionType } from 'core/v1/admin/permissions/entities/permission.model';
import {
  PermissionRepository,
  PermissionRepositoryResponse,
} from 'core/v1/admin/permissions/repositories/permission.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PermissionService implements PermissionRepository {
  constructor(private prismaService: PrismaService) {}
  async findAll(): Promise<PermissionRepositoryResponse[]> {
    const permissions = await this.prismaService.permission.findMany();
    return permissions.map((permission) => ({
      id: permission.id,
      name: permission.name as PermissionType,
    }));
  }

  async findByRoleId(roleId: number): Promise<PermissionRepositoryResponse[]> {
    const permissions = await this.prismaService.permission.findMany({
      where: {
        roles: {
          some: {
            role: {
              id: {
                equals: roleId,
              },
            },
          },
        },
      },
    });

    return permissions.map((permission) => ({
      id: permission.id,
      name: permission.name as PermissionType,
    }));
  }
  create(permission: string): PermissionRepositoryResponse {
    throw new Error('Method not yet defined');
  }
  update(id: number, name: string): PermissionRepositoryResponse {
    throw new Error('Method not yet defined');
  }
  delete(id: number): boolean {
    throw new Error('Method not yet defined');
  }
}
