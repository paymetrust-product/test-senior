import { AuthPasswordAdapter } from './../../../../core/v1/admin/auth/adapters/authPassword.adapter';
import { AdminBcryptAuthPasswordService } from './../../../../core/v1/admin/auth/services/adminBcryptAuthPasswordService';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ProfileRequest } from 'core/v1/admin/profile/entitites/profileRequest';
import { ProfileResponse } from 'core/v1/admin/profile/entitites/profileResponse';
import { ProfileRepository } from 'core/v1/admin/profile/repositories/profile.repository';
import { AdminService } from '../admin/admin.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProfileWithRoleResponse } from 'core/v1/admin/profile/entitites/profileWithRoleResponse';

@Injectable()
export class ProfileService implements ProfileRepository {
  private authPasswordAdapter: AuthPasswordAdapter =
    new AdminBcryptAuthPasswordService();
  constructor(
    private adminService: AdminService,
    private prismaService: PrismaService,
  ) {}

  async getProfile(id: number): Promise<ProfileResponse> {
    try {
      const admin = await this.adminService.findById(id);
      return {
        username: admin.username,
      };
    } catch (e: any) {
      throw e;
    }
  }

  async getProfileWithRole(id: number): Promise<ProfileWithRoleResponse> {
    try {
      const admin = await this.adminService.findById(id);
      return {
        username: admin.username,
        role: admin.role,
      };
    } catch (e: any) {
      throw e;
    }
  }

  async updateProfile(
    id: number,
    profile: ProfileRequest,
  ): Promise<ProfileResponse> {
    try {
      const updatedAdmin = await this.prismaService.admin.update({
        where: { id },
        data: {
          username: profile.username,
          ...(profile.password && {
            password: await this.authPasswordAdapter.hash(profile.password),
          }),
        },
      });

      return {
        username: updatedAdmin.username,
      };
    } catch (e: any) {
      throw new NotFoundException();
    }
  }
}
