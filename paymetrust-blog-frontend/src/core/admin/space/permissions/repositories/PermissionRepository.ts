import { Observable } from "rxjs";
import { PermissionResponse } from "../entities/PermissionResponse";

export interface PermissionRepository {
  permissionsList(): Observable<PermissionResponse[]>
}
