import { Observable, catchError, map, switchMap, tap, throwError } from 'rxjs';
import { RoleRepository } from '../repositories/RoleRepository';
import { UpdateRolesUseCase } from '../useCases/UpdateRolesUseCase';
import { GetRoleUseCase } from '../useCases/GetRoleUseCase';
import { CreateRoleUseCase } from '../useCases/CreateRoleUseCase';
import { RoleResponse } from '../entities/RoleResponse';
import { RoleFormRequest } from '../entities/RoleFormRequest';
import { PermissionResponse } from '../../permissions/entities/PermissionResponse';
import { GetPermissionsListUseCase } from '../../permissions/useCases/GetPermissionsListUseCase';
import { PermissionRepository } from '../../permissions/repositories/PermissionRepository';

export enum FormActionType {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
}

export class RoleFormViewModel {
  roleId: number = 0;
  private _formAction: FormActionType = FormActionType.CREATE;
  private _getRoleUseCase: GetRoleUseCase;
  private _createRoleUseCase: CreateRoleUseCase;
  private _updateRoleUseCase: UpdateRolesUseCase;
  private _getPermissionsListUseCase: GetPermissionsListUseCase;
  private _permissions: PermissionResponse[] = [];
  private _loading = false;
  private _permissionsLoading = false;
  private _submitLoading = false;
  private _error = {status: false, message: ""}

  constructor (private roleRepository: RoleRepository, private permissionRepository: PermissionRepository) {
    this._getPermissionsListUseCase = new GetPermissionsListUseCase(this.permissionRepository);
    this._getRoleUseCase = new GetRoleUseCase(this.roleRepository);
    this._createRoleUseCase = new CreateRoleUseCase(this.roleRepository);
    this._updateRoleUseCase = new UpdateRolesUseCase(this.roleRepository);
  }

  getPermissions(){
    this.startPermissionsLoading();
    return this._getPermissionsListUseCase.execute().pipe(
      tap((permissions)=>{
        this._permissions = permissions
        this.stopPermissionsLoading()
      }),
      switchMap(this.getRole.bind(this)),
      map(role=>{
        return {
          role,
          permissions: this._permissions,
        }
      }),
      catchError((error)=>{
        this.stopPermissionsLoading()
        this.setError(error);
        return throwError(()=>error)
      })
    );
  }

  private getRole(){
    if(this._formAction === FormActionType.UPDATE){
      this.startLoading();
      return this._getRoleUseCase.execute(this.roleId).pipe(
        tap(this.stopLoading.bind(this)),
        catchError((error)=>{
          this.stopLoading()
          this.setError(error);
          return throwError(()=>error)
        })
      );
    }

    return new Observable<RoleResponse>(subscription=>{
      subscription.next({
        id: this.roleId,
        label: '',
        permissions: []
      })
    })
  }

  submitForm(roleFormRequest: RoleFormRequest){
    if(this._formAction === FormActionType.CREATE){
      return this.createRole(roleFormRequest);
    }
    return this.updateRole(roleFormRequest);
  }

  createRole(roleFormRequest: RoleFormRequest){
    this.startSubmitLoading();
    return this._createRoleUseCase.execute(roleFormRequest).pipe(
      tap(()=>this.stopSubmitLoading()),
      catchError((error)=>{
        this.stopSubmitLoading()
        return throwError(()=>error)
      })
    );
  }

  updateRole(roleFormRequest: RoleFormRequest){
    this.startSubmitLoading();
    return this._updateRoleUseCase.execute(this.roleId, roleFormRequest).pipe(
      tap(()=>this.stopSubmitLoading()),
      catchError((error)=>{
        this.stopSubmitLoading()
        return throwError(()=>error)
      })
    );
  }

  checkRoleHavePermission(permission: PermissionResponse, role: RoleResponse ){
    const rolePermissionsIdArray = role.permissions?.map(permission=>permission.id)
    return rolePermissionsIdArray?.includes(permission.id)
  }

  filterSelectedIdPermissions(arraySelections: boolean[]){
    let idList: number[] = [];
    arraySelections.forEach((selection, index)=>{
      if(selection){
        idList.push(this._permissions[index].id)
      }
    })

    return idList;
  }

  getPermissionIndexId(index: number){
    return this._permissions[index].id
  }

  getPermissionIndexName(index: number){
    return this._permissions[index].name.replace("_", " ")
  }

  setFormActioonToCreate(){
    this._formAction = FormActionType.CREATE;
  }

  setFormActioonToUpdate(){
    this._formAction = FormActionType.UPDATE;
  }

  getActionTitle(){
    return this.formAction === FormActionType.CREATE ? "Create" : "Update"
  }

  startLoading(){
    this._loading = true
  }

  stopLoading(){
    this._loading = false
  }

  toggleLoading(){
    this._loading = !this._loading
  }

  startSubmitLoading(){
    this._submitLoading = true
  }

  stopSubmitLoading(){
    this._submitLoading = false
  }

  toggleSubmitLoading(){
    this._submitLoading = !this._submitLoading
  }

  startPermissionsLoading(){
    this._permissionsLoading = true
  }

  stopPermissionsLoading(){
    this._permissionsLoading = false
  }

  togglePermissionsLoading(){
    this._permissionsLoading = !this._permissionsLoading
  }

  setError(message: string){
    this._error = {status: true, message}
  }

  removeError(){
    this._error = {status:false, message:""}
  }

  get error(){
    return this._error.status
  }

  get errorMessage(){
    return this._error.status ? this._error.message : ""
  }

  get loading(){
    return this._loading
  }

  get permissionsLoading(){
    return this._permissionsLoading
  }

  get submitLoading(){
    return this._submitLoading
  }

  get permissions(){
    return this._permissions;
  }

  get formAction(){
    return this._formAction
  }
}
