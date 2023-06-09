import { AdminRepository } from '../repositories/admin.repository';

export class DeleteAdminUseCase {
  constructor(private adminRepository: AdminRepository) {}

  execute(id: number) {
    return this.adminRepository.delete(id);
  }
}
