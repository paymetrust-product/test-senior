import { Module ,forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from '@auth/auth.service';
import { JwtStrategy } from '@auth/jwt.strategy';
import { UserModule } from "@modules/user.module";

@Module({
  imports: [
    forwardRef(() => UserModule),
    JwtModule.register({
      secret: 'aka1234',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService], // Assurez-vous d'exporter AuthService
})
export class AuthModule {}
