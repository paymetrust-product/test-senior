import { AdminRepository } from '../repositories/AdminRepository';

export class GetAdminsListUseCase {
  constructor(private adminRepository: AdminRepository) {}
  execute(){
    return this.adminRepository.getAdmins();
  }
}
