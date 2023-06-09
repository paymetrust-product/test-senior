import { Injectable } from '@angular/core';
import AuthUserLocalStorageSingletonCoreService from 'src/core/admin/auth/services/AuthUserLocalStorageSingletonCoreService';

@Injectable({
  providedIn: 'root'
})
export class AuthUserLocalStorageService {
  authUserLocalStorageSingletonService = AuthUserLocalStorageSingletonCoreService.getInstance()
  constructor() { }
}
