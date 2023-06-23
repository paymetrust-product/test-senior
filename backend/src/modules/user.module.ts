import { TypeOrmModule } from "@nestjs/typeorm";
import { Module,forwardRef  } from "@nestjs/common";
import { User } from "@domain/entities/user.entity";
import { UserRepository } from "@infrastructure/repositories/user.repository";
import { UserService } from "@application/services/user.service";
import { UserController } from "@interfaces/controllers/user.controller";
import { AuthModule } from "@auth/auth.module";


@Module({
  imports: [TypeOrmModule.forFeature([User]), forwardRef(() => AuthModule)],
  providers:
    [
    UserService,
      {
        provide: 'IUserRepository',
        useClass: UserRepository,
      },
    ],
  exports:[UserService],
  controllers: [UserController],
})
export class UserModule {}