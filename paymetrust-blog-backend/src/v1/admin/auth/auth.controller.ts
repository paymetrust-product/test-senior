import { ProfileService } from './../profile/profile.service';
import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dtos/auth.dto';
import { SignInUseCase } from 'core/v1/admin/auth/useCases/signIn.usecase';

@Controller('v1/auth')
export class AuthController {
  private signInUseCase: SignInUseCase;
  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
  ) {
    this.signInUseCase = new SignInUseCase(authService, profileService);
  }

  @Post('signin')
  @HttpCode(200)
  signin(@Body() body: SignInDto) {
    return this.signInUseCase.execute(body.username, body.password);
  }
}
