import { AdminRepository } from '../repositories/AdminRepository';

export class DeleteAdminUseCase {
  constructor(private adminRepository: AdminRepository) {}
  execute(id: number){
    return this.adminRepository.deleteAdmin(id);
  }
}
