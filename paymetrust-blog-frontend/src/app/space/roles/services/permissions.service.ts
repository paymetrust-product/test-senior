import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { PermissionResponse } from 'src/core/admin/space/permissions/entities/PermissionResponse';
import { PermissionRepository } from 'src/core/admin/space/permissions/repositories/PermissionRepository';
import { environment } from 'src/environments/environment';
import { spaceHandleHttpError } from '../../services/sapce-handle-http-error';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService implements PermissionRepository {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  permissionsList(): Observable<PermissionResponse[]> {
    return this.http.get<PermissionResponse[]>(`${this.apiBaseUrl}/permissions/all`).pipe(
      catchError(spaceHandleHttpError),
    )
  }
}
