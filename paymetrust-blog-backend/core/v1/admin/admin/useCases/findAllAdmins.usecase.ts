import { AdminRepository } from '../repositories/admin.repository';

export class FindAllAdminUseCase {
  constructor(private adminRepository: AdminRepository) {}

  execute() {
    return this.adminRepository.findAll();
  }
}
