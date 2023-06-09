import { catchError, tap, throwError } from 'rxjs';
import { GetRolesListUseCase } from '../useCases/GetRolesListUseCase';
import { RoleRepository } from './../repositories/RoleRepository';
import { DeleteRoleUseCase } from '../useCases/DeleteRoleUseCase';
import { RoleListResponse } from '../entities/RoleListResponse';

export class RolesListViewModel {
  private _getRolesListUseCase: GetRolesListUseCase;
  private _deleteRoleListUseCase: DeleteRoleUseCase;
  private _loading = false;
  private _deleteProgress: number[] = [];
  private _error = { status: false, message: "" }

  constructor(private roleRepository: RoleRepository) {
    this._getRolesListUseCase = new GetRolesListUseCase(this.roleRepository)
    this._deleteRoleListUseCase = new DeleteRoleUseCase(this.roleRepository)
  }

  getRolesList() {
    this.startLoading();
    return this._getRolesListUseCase.execute().pipe(
      tap(this.stopLoading.bind(this)),
      catchError((error) => {
        this.stopLoading()
        this.setError(error);
        return throwError(() => error)
      })
    );
  }

  deleteRole(id: number) {
    this.addDeleteProgress(id);
    return this._deleteRoleListUseCase.execute(id).pipe(
      tap(() => {
        this.removeDeleteProgress(id)
      }),
      catchError((error) => {
        this.removeDeleteProgress(id)
        return throwError(() => error)
      })
    );
  }

  permissionsToString(role: RoleListResponse) {
    let permissionsString = ""
    role.permissions.forEach((permission, index) => {
      const name = permission.name.replace("_", " ")
      if (index == 0) {
        permissionsString += name
      }
      else {
        permissionsString += `, ${name}`
      }
    })

    return permissionsString
  }

  addDeleteProgress(id: number) {
    this._deleteProgress.push(id)
  }

  removeDeleteProgress(id: number) {
    const index = this._deleteProgress.findIndex(progressId => progressId === id);
    if (index) {
      this._deleteProgress.splice(index, 1)
    }
  }

  checkRoleDeleteInProgress(id: number) {
    return this._deleteProgress.find(progressId => progressId === id)
  }

  startLoading() {
    this._loading = true
  }

  stopLoading() {
    this._loading = false
  }

  toggleLoading() {
    this._loading = !this._loading
  }

  setError(message: string) {
    this._error = { status: true, message }
  }

  removeError() {
    this._error = { status: false, message: "" }
  }

  get error() {
    return this._error.status
  }

  get errorMessage() {
    return this._error.status ? this._error.message : ""
  }

  get loading() {
    return this._loading
  }
}
