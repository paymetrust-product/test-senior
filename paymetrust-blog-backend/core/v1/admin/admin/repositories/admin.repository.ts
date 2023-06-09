import { AdminRequest } from '../entities/adminRequest';
import { AdminResponse } from '../entities/adminResponse';

export interface AdminRepository {
  findAll(): Promise<AdminResponse[]>;
  findById(id: number): Promise<AdminResponse>;
  create(admin: AdminRequest): Promise<AdminResponse>;
  update(id: number, admin: AdminRequest): Promise<AdminResponse>;
  delete(id: number): Promise<boolean>;
}
