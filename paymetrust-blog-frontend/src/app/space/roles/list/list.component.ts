import { SpaceToastService } from './../../layout/services/space-toast.service';
import { Component, OnInit } from '@angular/core';
import { RolesService } from '../services/roles.service';
import { RolesListViewModel } from 'src/core/admin/space/roles/viewModel/RolesListViewModel';
import { RoleListResponse } from 'src/core/admin/space/roles/entities/RoleListResponse';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'roles-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  roles: RoleListResponse[] = []
  rolesListViewModel: RolesListViewModel;

  constructor(
    private rolesService: RolesService,
    private spaceToastService: SpaceToastService,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.rolesListViewModel = new RolesListViewModel(rolesService)
  }
  ngOnInit(): void {
    this.rolesListViewModel.getRolesList().subscribe({
      next: (roles) => {
        this.roles = roles
      },
      error: error => {
        this.spaceToastService.show("Fail to get list", error, 'bg-danger text-light')
      }
    })
  }

  createNewRole() {
    this.router.navigate(["../create"], { relativeTo: this.route })
  }

  editRole(id: number){
    this.router.navigate([`../edit/${id}`], { relativeTo: this.route })
  }

  deleteRole(id: number) {
    if(confirm("Are you sure to delete this role")){
      this.rolesListViewModel.deleteRole(id).subscribe({
        next: (_: any) => {
          const index = this.roles.findIndex(role => role.id === id);
          if (index) {
            this.roles.splice(index, 1);
          }
        },
        error: error => {
          this.spaceToastService.show("Fail to delete role", error, 'bg-danger text-light')
        }
      })
    }
  }
}
