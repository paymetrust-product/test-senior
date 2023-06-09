import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { GetProfileUseCase } from 'core/v1/admin/profile/usecases/getProfile.usecase';
import { AuthGuard } from '../auth/guards/auth.guard';
import { authAdminDto } from '../auth/dtos/auth.dto';
import { Admin } from '../auth/decorators/admin.decorator';
import { UpdateProfileUseCase } from 'core/v1/admin/profile/usecases/updateProfile.usecase';
import { UpdateProfileDto } from './dtos/updateProfileDto';

@Controller('v1/profile')
export class ProfileController {
  private getProfileUseCase: GetProfileUseCase;
  private updatetProfileUseCase: UpdateProfileUseCase;
  constructor(private profileService: ProfileService) {
    this.getProfileUseCase = new GetProfileUseCase(this.profileService);
    this.updatetProfileUseCase = new UpdateProfileUseCase(this.profileService);
  }

  @Get()
  @UseGuards(AuthGuard)
  async get(@Admin() admin: authAdminDto) {
    return this.getProfileUseCase.execute(admin.id);
  }

  @Patch('update')
  @UseGuards(AuthGuard)
  async update(@Body() body: UpdateProfileDto, @Admin() admin: authAdminDto) {
    return this.updatetProfileUseCase.execute(admin.id, {
      username: body.username,
      ...(body.password && { password: body.password }),
    });
  }
}
