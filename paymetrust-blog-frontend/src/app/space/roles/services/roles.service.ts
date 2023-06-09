import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { DeleteRoleResponse } from 'src/core/admin/space/roles/entities/DeleteRoleResponse';
import { RoleListResponse } from 'src/core/admin/space/roles/entities/RoleListResponse';
import { RoleFormRequest } from 'src/core/admin/space/roles/entities/RoleRequest';
import { RoleResponse } from 'src/core/admin/space/roles/entities/RoleResponse';
import { RoleRepository } from 'src/core/admin/space/roles/repositories/RoleRepository';
import { environment } from 'src/environments/environment';
import { spaceHandleHttpError } from '../../services/sapce-handle-http-error';

@Injectable({
  providedIn: 'root'
})
export class RolesService implements RoleRepository {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getRoles(): Observable<RoleListResponse[]> {
    return this.http.get<RoleListResponse[]>(`${this.apiBaseUrl}/roles/all`).pipe(
      catchError(spaceHandleHttpError),
    )
  }
  getRole(id: number): Observable<RoleResponse> {
    return this.http.get<RoleResponse>(`${this.apiBaseUrl}/roles/${id}`).pipe(
      catchError(spaceHandleHttpError),
    )
  }
  createRole(roleFormRequest: RoleFormRequest): Observable<RoleResponse> {
    return this.http.post<RoleResponse>(`${this.apiBaseUrl}/roles/create`, roleFormRequest).pipe(
      catchError(spaceHandleHttpError),
    )
  }
  updateRole(id: number, roleFormRequest: RoleFormRequest): Observable<RoleResponse> {
    return this.http.patch<RoleResponse>(`${this.apiBaseUrl}/roles/update/${id}`, roleFormRequest).pipe(
      catchError(spaceHandleHttpError),
    )
  }
  deleteRole(id: number): Observable<DeleteRoleResponse> {
    return this.http.delete<DeleteRoleResponse>(`${this.apiBaseUrl}/roles/delete/${id}`).pipe(
      catchError(spaceHandleHttpError),
    )
  }
}
