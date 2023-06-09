import { Observable, catchError, map, switchMap, tap, throwError } from 'rxjs';
import { AdminRepository } from '../repositories/AdminRepository';
import { UpdateAdminsUseCase } from '../useCases/UpdateAdminsUseCase';
import { GetAdminUseCase } from '../useCases/GetAdminUseCase';
import { RoleRepository } from '../../roles/repositories/RoleRepository';
import { GetRolesListUseCase } from '../../roles/useCases/GetRolesListUseCase';
import { CreateAdminUseCase } from '../useCases/CreateAdminUseCase';
import { AdminResponse } from '../entities/AdminResponse';
import { RoleListResponse } from '../../roles/entities/RoleListResponse';
import { AdminFormRequest } from '../entities/AdminFormRequest';

export enum FormActionType {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
}

export class AdminFormViewModel {
  adminId: number = 0;
  private _formAction: FormActionType = FormActionType.CREATE;
  private _getAdminUseCase: GetAdminUseCase;
  private _createAdminUseCase: CreateAdminUseCase;
  private _updateAdminUseCase: UpdateAdminsUseCase;
  private _getRolesListUseCase: GetRolesListUseCase;
  private _admin: AdminResponse | undefined;
  private _roles: RoleListResponse[] = [];
  private _loading = false;
  private _rolesLoading = false;
  private _submitLoading = false;
  private _error = {status: false, message: ""}

  constructor (private adminRepository: AdminRepository, private roleRepository: RoleRepository) {
    this._getRolesListUseCase = new GetRolesListUseCase(this.roleRepository);
    this._getAdminUseCase = new GetAdminUseCase(this.adminRepository);
    this._createAdminUseCase = new CreateAdminUseCase(this.adminRepository);
    this._updateAdminUseCase = new UpdateAdminsUseCase(this.adminRepository);
  }

  getRoles(){
    this.startRolesLoading();
    return this._getRolesListUseCase.execute().pipe(
      tap((roles)=>{
        this._roles = roles
        this.stopRolesLoading.bind(this)
      }),
      switchMap(this.getAdmin.bind(this)),
      map(admin=>{
        return {
          admin,
          roles: this._roles,
        }
      }),
      catchError((error)=>{
        this.stopRolesLoading()
        this.setError(error);
        return throwError(()=>error)
      })
    );
  }

  getAdmin(){
    if(this._formAction === FormActionType.UPDATE){
      this.startLoading();
      return this._getAdminUseCase.execute(this.adminId).pipe(
        tap((admin)=>{
          this._admin = admin
          this.stopLoading.bind(this)
        }),
        catchError((error)=>{
          this.stopLoading()
          this.setError(error);
          return throwError(()=>error)
        })
      );
    }

    return new Observable<AdminResponse>(subscription=>{
      subscription.next({
        id: this.adminId,
        username: '',
        ...(this._roles.length > 0 && {role: this._roles[0]})
      })
    })
  }

  submitForm(adminFormRequest: AdminFormRequest){
    if(this._formAction === FormActionType.CREATE){
      return this.createAdmin(adminFormRequest);
    }
    return this.updateAdmin(adminFormRequest);
  }

  createAdmin(adminFormRequest: AdminFormRequest){
    this.startSubmitLoading();
    return this._createAdminUseCase.execute(adminFormRequest).pipe(
      tap(()=>this.stopSubmitLoading()),
      catchError((error)=>{
        this.stopSubmitLoading()
        return throwError(()=>error)
      })
    );
  }

  updateAdmin(adminFormRequest: AdminFormRequest){
    this.startSubmitLoading();
    return this._updateAdminUseCase.execute(this.adminId, adminFormRequest).pipe(
      tap(()=>this.stopSubmitLoading()),
      catchError((error)=>{
        this.stopSubmitLoading()
        return throwError(()=>error)
      })
    );
  }

  getActionTitle(){
    return this.formAction === FormActionType.CREATE ? "Create" : "Update"
  }

  setFormActioonToCreate(){
    this._formAction = FormActionType.CREATE;
  }

  setFormActioonToUpdate(){
    this._formAction = FormActionType.UPDATE;
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

  startRolesLoading(){
    this._rolesLoading = true
  }

  stopRolesLoading(){
    this._rolesLoading = false
  }

  toggleRolesLoading(){
    this._rolesLoading = !this._rolesLoading
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

  get rolesLoading(){
    return this._rolesLoading
  }

  get roles(){
    return this._roles;
  }

  get admin(){
    return this._admin
  }

  get submitLoading(){
    return this._submitLoading
  }

  get formAction(){
    return this._formAction
  }
}
