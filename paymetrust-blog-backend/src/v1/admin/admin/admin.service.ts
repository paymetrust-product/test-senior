import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AdminRepository } from 'core/v1/admin/admin/repositories/admin.repository';
import { AdminRequest } from 'core/v1/admin/admin/entities/adminRequest';
import { AdminResponse } from 'core/v1/admin/admin/entities/adminResponse';
import { RoleService } from '../roles/role.service';
import { AuthPasswordAdapter } from 'core/v1/admin/auth/adapters/authPassword.adapter';
import { AdminBcryptAuthPasswordService } from 'core/v1/admin/auth/services/adminBcryptAuthPasswordService';

@Injectable()
export class AdminService implements AdminRepository {
  private authPasswordAdapter: AuthPasswordAdapter =
    new AdminBcryptAuthPasswordService();
  constructor(
    private prismaService: PrismaService,
    private roleService: RoleService,
  ) {}
  async findAll(): Promise<AdminResponse[]> {
    const admins = await this.prismaService.admin.findMany({
      include: {
        role: {
          include: {
            creator: true,
          },
        },
      },
    });

    return admins.map((admin) => ({
      id: admin.id,
      username: admin.username,
      role: {
        id: admin.role.id,
        label: admin.role.label,
        createdBy: {
          id: admin.role.creator.id,
          username: admin.role.creator.username,
        },
        createdAt: admin.role.createdAt,
      },
      createdAt: admin.createdAt,
    }));
  }

  async findById(id: number): Promise<AdminResponse> {
    const admin = await this.prismaService.admin.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        username: true,
        roleId: true,
      },
    });

    if (admin) {
      const adminRoleResponse = await this.roleService.findById(admin.roleId);
      return {
        id: admin.id,
        username: admin.username,
        role: adminRoleResponse,
        createdAt: adminRoleResponse.createdAt,
      };
    } else {
      throw new NotFoundException();
    }
  }

  async create(admin: AdminRequest): Promise<AdminResponse> {
    return this.findRoleByIdBefore(admin.roleId, async () => {
      const hashedPassword = await this.authPasswordAdapter.hash(
        admin.password,
      );
      const newAdmin = await this.prismaService.admin.create({
        data: {
          username: admin.username,
          password: hashedPassword,
          createdAt: new Date(),
          roleId: admin.roleId,
        },
        select: {
          id: true,
          username: true,
        },
      });

      const newAdminRoleResponse = await this.roleService.findById(
        admin.roleId,
      );

      return {
        id: newAdmin.id,
        username: newAdmin.username,
        role: newAdminRoleResponse,
      };
    });
  }

  async update(id: number, admin: AdminRequest): Promise<AdminResponse> {
    return this.findByIdBefore(id, async () => {
      return this.findRoleByIdBefore(admin.roleId, async () => {
        const updatedRole = await this.prismaService.admin.update({
          where: { id: id },
          data: {
            username: admin.username,
            ...(admin.password && {
              password: await this.authPasswordAdapter.hash(admin.password),
            }),
            roleId: admin.roleId,
          },
        });

        const updatedAdminRoleResponse = await this.roleService.findById(
          admin.roleId,
        );

        return {
          id: updatedRole.id,
          username: updatedRole.username,
          role: updatedAdminRoleResponse,
        };
      });
    });
  }
  async delete(id: number): Promise<boolean> {
    return this.findByIdBefore(id, async () => {
      //delete admin
      await this.prismaService.admin.delete({
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

  private async findRoleByIdBefore(roleId, callBack: () => any) {
    try {
      await this.roleService.findById(roleId);
    } catch (e: any) {
      throw new NotFoundException('roleId not found');
    }

    return callBack();
  }
}
