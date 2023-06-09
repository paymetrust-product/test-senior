import { AdminRepository } from '../repositories/AdminRepository';

export class GetAdminUseCase {
  constructor(private adminRepository: AdminRepository) {}
  execute(id: number){
    return this.adminRepository.getAdmin(id);
  }
}
