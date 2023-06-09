import { AdminRepository } from '../repositories/admin.repository';

export class FindAdminByIdUseCase {
  constructor(private adminRepository: AdminRepository) {}

  execute(id: number) {
    return this.adminRepository.findById(id);
  }
}
