import { Observable } from "rxjs";
import { RoleListResponse } from "../entities/RoleListResponse";
import { RoleResponse } from "../entities/RoleResponse";
import { DeleteRoleResponse } from "../entities/DeleteRoleResponse";
import { RoleFormRequest } from "../entities/RoleRequest";

export interface RoleRepository {
  getRoles(): Observable<RoleListResponse[]>;
  getRole(id: number): Observable<RoleResponse>;
  createRole(roleFormRequest: RoleFormRequest): Observable<RoleResponse>;
  updateRole(id: number, roleFormRequest: RoleFormRequest): Observable<RoleResponse>;
  deleteRole(id: number): Observable<DeleteRoleResponse>;
}
