import { catchError, tap, throwError } from 'rxjs';
import { GetAdminsListUseCase } from '../useCases/GetAdminsListUseCase';
import { AdminRepository } from '../repositories/AdminRepository';
import { DeleteAdminUseCase } from '../useCases/DeleteAdminUseCase';

export class AdminsListViewModel {
  private _getAdminsListUseCase: GetAdminsListUseCase;
  private _deleteAdminListUseCase: DeleteAdminUseCase;
  private _loading = false;
  private _deleteProgress: number[] = [];
  private _error = {status: false, message: ""}

  constructor (private AdminRepository: AdminRepository) {
    this._getAdminsListUseCase = new GetAdminsListUseCase(this.AdminRepository)
    this._deleteAdminListUseCase = new DeleteAdminUseCase(this.AdminRepository)
  }

  getAdminsList(){
    this.startLoading();
    return this._getAdminsListUseCase.execute().pipe(
      tap(this.stopLoading.bind(this)),
      catchError((error)=>{
        this.stopLoading()
        this.setError(error);
        return throwError(()=>error)
      })
    );
  }

  deleteAdmin(id: number){
    this.addDeleteProgress(id);
    return this._deleteAdminListUseCase.execute(id).pipe(
      tap(()=>this.removeDeleteProgress(id)),
      catchError((error)=>{
        this.removeDeleteProgress(id)
        return throwError(()=>error)
      })
    );
  }

  addDeleteProgress(id: number){
    this._deleteProgress.push(id)
  }

  removeDeleteProgress(id: number){
    const index = this._deleteProgress.findIndex(progressId=> progressId === id);
    if(index){
      this._deleteProgress.splice(index, 1)
    }
  }

  checkAdminDeleteInProgress(id: number){
    return this._deleteProgress.find(progressId=> progressId === id)
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
}
