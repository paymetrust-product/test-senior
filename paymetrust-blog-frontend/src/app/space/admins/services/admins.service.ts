import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { spaceHandleHttpError } from '../../services/sapce-handle-http-error';
import { AdminRepository } from 'src/core/admin/space/admins/repositories/AdminRepository';
import { AdminFormRequest } from 'src/core/admin/space/admins/entities/AdminFormRequest';
import { AdminListResponse } from 'src/core/admin/space/admins/entities/AdminListResponse';
import { AdminResponse } from 'src/core/admin/space/admins/entities/AdminResponse';
import { DeleteAdminResponse } from 'src/core/admin/space/admins/entities/DeleteAdminResponse';

@Injectable({
  providedIn: 'root'
})
export class AdminsService implements AdminRepository {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  getAdmins(): Observable<AdminListResponse[]> {
    return this.http.get<AdminListResponse[]>(`${this.apiBaseUrl}/admins/all`).pipe(
      catchError(spaceHandleHttpError),
    )
  }
  getAdmin(id: number): Observable<AdminResponse> {
    return this.http.get<AdminResponse>(`${this.apiBaseUrl}/admins/${id}`).pipe(
      catchError(spaceHandleHttpError),
    )
  }
  createAdmin(adminFormRequest: AdminFormRequest): Observable<AdminResponse> {
    return this.http.post<AdminResponse>(`${this.apiBaseUrl}/admins/create`, adminFormRequest).pipe(
      catchError(spaceHandleHttpError),
    )
  }
  updateAdmin(id: number, adminFormRequest: AdminFormRequest): Observable<AdminResponse> {
    return this.http.patch<AdminResponse>(`${this.apiBaseUrl}/admins/update/${id}`, adminFormRequest).pipe(
      catchError(spaceHandleHttpError),
    )
  }
  deleteAdmin(id: number): Observable<DeleteAdminResponse> {
    return this.http.delete<DeleteAdminResponse>(`${this.apiBaseUrl}/admins/delete/${id}`).pipe(
      catchError(spaceHandleHttpError),
    )
  }
}
