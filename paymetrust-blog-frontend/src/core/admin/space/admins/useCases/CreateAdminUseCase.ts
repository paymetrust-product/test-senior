import { AdminFormRequest } from '../entities/AdminFormRequest';
import { AdminRepository } from '../repositories/AdminRepository';

export class CreateAdminUseCase {
  constructor(private adminRepository: AdminRepository) {}
  execute(adminFormRequest: AdminFormRequest){
    return this.adminRepository.createAdmin(adminFormRequest);
  }
}
