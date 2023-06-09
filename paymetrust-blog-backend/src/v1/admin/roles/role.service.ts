import {
  Injectable,
  NotFoundException,
  PreconditionFailedException,
} from '@nestjs/common';
import {
  RoleCreateRequest,
  RoleUpdateRequest,
} from 'core/v1/admin/roles/entities/roleRequest';
import { RoleResponse } from 'core/v1/admin/roles/entities/roleResponse';
import { RoleRepository } from 'core/v1/admin/roles/repositories/role.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { PermissionService } from '../permissions/permission.service';
import { PermissionType } from 'core/v1/admin/permissions/entities/permission.model';

@Injectable()
export class RoleService implements RoleRepository {
  constructor(
    private prismaService: PrismaService,
    private permissionService: PermissionService,
  ) {}
  async findAll(): Promise<RoleResponse[]> {
    const roles = await this.prismaService.role.findMany({
      include: {
        permissions: {
          include: {
            permission: true,
          },
        },
        creator: true,
      },
    });

    return roles.map((role) => ({
      id: role.id,
      label: role.label,
      createdBy: {
        id: role.creator.id,
        username: role.creator.username,
      },
      permissions: role.permissions.map((permission) => ({
        id: permission.permission.id,
        name: permission.permission.name as PermissionType,
      })),
      createdAt: role.createdAt,
    }));
  }

  async findById(roleId: number): Promise<RoleResponse> {
    const role = await this.prismaService.role.findUnique({
      where: {
        id: roleId,
      },
      select: {
        id: true,
        label: true,
        creator: true,
        createdAt: true,
      },
    });
    if (role) {
      return {
        id: role.id,
        label: role.label,
        permissions: await this.permissionService.findByRoleId(role.id),
        createdBy: {
          id: role.creator.id,
          username: role.creator.username,
        },
        createdAt: role.createdAt,
      };
    } else {
      throw new NotFoundException();
    }
  }

  async create(role: RoleCreateRequest): Promise<RoleResponse> {
    const newRole = await this.prismaService.role.create({
      data: {
        label: role.label,
        createdAt: new Date(),
        createdBy: role.creatorId,
        permissions: {
          create: this.permissionsAssociatePrismaArrayGenerator(
            role.permissions,
          ),
        },
      },
      select: {
        id: true,
        label: true,
        creator: true,
        createdAt: true,
      },
    });

    return {
      id: newRole.id,
      label: newRole.label,
      permissions: await this.permissionService.findByRoleId(newRole.id),
      createdBy: {
        id: newRole.creator.id,
        username: newRole.creator.username,
      },
      createdAt: newRole.createdAt,
    };
  }
  async update(id: number, role: RoleUpdateRequest): Promise<RoleResponse> {
    return this.findByIdBefore(id, async () => {
      //detach role to permissions by delete rolespermissions with roleId = id
      await this.detachRoleToPermissions(id);

      //update role
      const updatedRole = await this.prismaService.role.update({
        where: { id: id },
        data: {
          label: role.label,
          permissions: {
            create: this.permissionsAssociatePrismaArrayGenerator(
              role.permissions,
            ),
          },
        },
        select: {
          id: true,
          label: true,
          permissions: {
            select: {
              permission: true,
            },
          },
          creator: true,
          createdAt: true,
        },
      });

      if (updatedRole) {
        return {
          id: updatedRole.id,
          label: updatedRole.label,
          permissions: updatedRole.permissions.map((rolePermission) => ({
            id: rolePermission.permission.id,
            name: rolePermission.permission.name as PermissionType,
          })),
          createdBy: {
            id: updatedRole.creator.id,
            username: updatedRole.creator.username,
          },
          createdAt: updatedRole.createdAt,
        };
      } else {
        throw new PreconditionFailedException();
      }
    });
  }
  async delete(id: number): Promise<boolean> {
    return this.findByIdBefore(id, async () => {
      //detach role to permissions by delete rolespermissions with roleId = id
      await this.detachRoleToPermissions(id);

      //delete role
      await this.prismaService.role.delete({
        where: {
          id,
        },
      });
      return { success: true };
    });
  }

  private async findByIdBefore(id, callBack: () => any) {
    //check if role exist
    try {
      await this.findById(id);
    } catch (e: any) {
      throw e;
    }

    return callBack();
  }

  private permissionsAssociatePrismaArrayGenerator(permissions: number[]) {
    return permissions.map((permissionId) => ({
      attachedAt: new Date(),
      permission: {
        connect: {
          id: permissionId,
        },
      },
    }));
  }

  private detachRoleToPermissions(roleId) {
    return this.prismaService.rolesPermissions.deleteMany({
      where: {
        roleId: roleId,
      },
    });
  }
}
