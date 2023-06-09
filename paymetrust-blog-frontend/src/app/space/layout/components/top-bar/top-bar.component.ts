import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserLocalStorageService } from 'src/app/services/auth-user-local-storage/auth-user-local-storage.service';
import { PermissionType } from 'src/core/admin/auth/entities/SignInResponse';
import { PermissionService } from 'src/core/admin/auth/services/PermissionService';
import TopBarViewModel from 'src/core/admin/space/layout/viewModel/TopBarViewModel';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  private topBarViewModel: TopBarViewModel
  permissionService: PermissionService
  permissionTypes = PermissionType
  isNavbarCollapsed = true;

  constructor(private authUserLocalStorageService: AuthUserLocalStorageService, private router: Router){
    this.topBarViewModel = new TopBarViewModel(this.authUserLocalStorageService.authUserLocalStorageSingletonService)
    this.permissionService = new PermissionService(this.authUserLocalStorageService.authUserLocalStorageSingletonService)
  }
  disconnect(){
    try{
      this.topBarViewModel.disconnect(this.redirectToLogin.bind(this))
    }
    catch{
      alert("Disconnection Fail")
    }
  }

  redirectToLogin(){
    this.router.navigate(["/auth/login"])
  }

  getUserName(){
    return this.topBarViewModel.getUserName();
  }
}
