import { AdminRequest } from '../entities/adminRequest';
import { AdminRepository } from '../repositories/admin.repository';

export class CreateAdminUseCase {
  constructor(private adminRepository: AdminRepository) {}

  execute(admin: AdminRequest) {
    try {
      return this.adminRepository.create(admin);
    } catch (e: any) {
      throw e;
    }
  }
}
