import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { DecodeAdminTokenUseCase } from 'core/v1/admin/auth/useCases/decodeAdminToken.usecase';
import { Observable } from 'rxjs';

@Injectable()
export class AdminInterceptor implements NestInterceptor {
  private decodeAdminTokenUseCase = new DecodeAdminTokenUseCase();
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers?.authorization;
    if (authorization) {
      const admin = this.decodeAdminTokenUseCase.execute(authorization);
      if (admin) {
        request.admin = admin;
      }
    }
    return next.handle();
  }
}
