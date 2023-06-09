import { PrismaClient } from '@prisma/client';
import { PermissionType } from '../core/v1/admin/permissions/entities/permission.model';
import { AuthPasswordAdapter } from '../core/v1/admin/auth/adapters/authPassword.adapter';
import { AdminBcryptAuthPasswordService } from '../core/v1/admin/auth/services/adminBcryptAuthPasswordService';

const prisma = new PrismaClient();

const authPasswordAdapter: AuthPasswordAdapter =
  new AdminBcryptAuthPasswordService();

async function main() {
  const seeAdmins = await prisma.permission.create({
    data: {
      name: PermissionType.SEE_ADMINS,
    },
  });

  const manageAdmins = await prisma.permission.create({
    data: {
      name: PermissionType.MANAGE_ADMINS,
    },
  });

  const manageArticles = await prisma.permission.create({
    data: {
      name: PermissionType.MANAGE_ARTICLES,
    },
  });
  console.log('permissions: ', { seeAdmins, manageAdmins, manageArticles });

  const adminRole = await prisma.role.create({
    data: {
      label: 'admin',
      createdAt: new Date(),
      createdBy: 1,
      permissions: {
        create: [
          {
            attachedAt: new Date(),
            permission: {
              connect: {
                id: seeAdmins.id,
              },
            },
          },
          {
            attachedAt: new Date(),
            permission: {
              connect: {
                id: manageAdmins.id,
              },
            },
          },
          {
            attachedAt: new Date(),
            permission: {
              connect: {
                id: manageArticles.id,
              },
            },
          },
        ],
      },
    },
  });

  console.log('adminRole: ', adminRole);

  const hashedPassword = await authPasswordAdapter.hash('admin');
  const admin = await prisma.admin.create({
    data: {
      username: 'admin',
      password: hashedPassword,
      createdAt: new Date(),
      roleId: adminRole.id,
    },
  });
  console.log('adminUser: ', admin);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
