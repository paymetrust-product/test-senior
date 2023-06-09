import { AdminRequest } from '../entities/adminRequest';
import { AdminRepository } from '../repositories/admin.repository';

export class UpdateAdminUseCase {
  constructor(private adminRepository: AdminRepository) {}

  execute(id: number, admin: AdminRequest) {
    return this.adminRepository.update(id, admin);
  }
}
