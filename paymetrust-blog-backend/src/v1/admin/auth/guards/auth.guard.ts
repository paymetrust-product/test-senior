import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { ValidateAdminTokenUseCase } from 'core/v1/admin/auth/useCases/validateAdminToken.usecase';

@Injectable()
export class AuthGuard implements CanActivate {
  private validateAdminTokenUseCase: ValidateAdminTokenUseCase;

  constructor(private authService: AuthService) {
    this.validateAdminTokenUseCase = new ValidateAdminTokenUseCase(authService);
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers?.authorization;
    if (authorization) {
      return this.validateAdminTokenUseCase.execute(authorization);
    } else {
      return false;
    }
  }
}
