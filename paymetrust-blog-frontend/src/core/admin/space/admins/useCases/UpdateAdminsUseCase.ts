import { AdminFormRequest } from '../entities/AdminFormRequest';
import { AdminRepository } from '../repositories/AdminRepository';

export class UpdateAdminsUseCase {
  constructor(private adminRepository: AdminRepository) {}
  execute(id: number, adminFormRequest: AdminFormRequest){
    return this.adminRepository.updateAdmin(id, adminFormRequest);
  }
}
