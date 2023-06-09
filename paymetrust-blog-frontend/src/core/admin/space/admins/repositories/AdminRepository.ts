import { Observable } from "rxjs";
import { AdminListResponse } from "../entities/AdminListResponse";
import { AdminResponse } from "../entities/AdminResponse";
import { DeleteAdminResponse } from "../entities/DeleteAdminResponse";
import { AdminFormRequest } from "../entities/AdminFormRequest";

export interface AdminRepository {
  getAdmins(): Observable<AdminListResponse[]>;
  getAdmin(id: number): Observable<AdminResponse>;
  createAdmin(adminFormRequest: AdminFormRequest): Observable<AdminResponse>;
  updateAdmin(id: number, roleFormRequest: AdminFormRequest): Observable<AdminResponse>;
  deleteAdmin(id: number): Observable<DeleteAdminResponse>;
}
