import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthPasswordAdapter } from 'core/v1/admin/auth/adapters/authPassword.adapter';
import { AuthRepository } from 'core/v1/admin/auth/repositories/auth.repository';
import { AdminBcryptAuthPasswordService } from 'core/v1/admin/auth/services/adminBcryptAuthPasswordService';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService implements AuthRepository {
  private authPasswordAdapter: AuthPasswordAdapter =
    new AdminBcryptAuthPasswordService();
  constructor(private prismaService: PrismaService) {}

  async signIn(username: string, password: string) {
    const admin = await this.prismaService.admin.findFirst({
      where: { username },
    });

    if (
      admin &&
      (await this.authPasswordAdapter.compare(password, admin.password))
    ) {
      return admin;
    } else {
      throw new UnauthorizedException();
    }
  }

  async checkAdminExist(id: number) {
    const admin = await this.prismaService.admin.findUnique({
      where: {
        id,
      },
    });
    if (!admin) {
      return false;
    }

    return true;
  }
}
