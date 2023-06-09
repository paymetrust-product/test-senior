import { Component, OnInit } from '@angular/core';
import { AdminsListViewModel } from 'src/core/admin/space/admins/viewModel/AdminsListViewModel';
import { AdminsService } from '../services/admins.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminListResponse } from 'src/core/admin/space/admins/entities/AdminListResponse';
import { SpaceToastService } from '../../layout/services/space-toast.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  admins: AdminListResponse[] = [];
  adminsListViewModel: AdminsListViewModel;

  constructor(
    private adminsService: AdminsService,
    private router: Router,
    private route: ActivatedRoute,
    private spaceToastService: SpaceToastService,
  ){
    this.adminsListViewModel = new AdminsListViewModel(adminsService)
  }

  ngOnInit(): void {
    this.adminsListViewModel.getAdminsList().subscribe({
      next: (admins) => {
        this.admins = admins
      },
      error: error => {
        this.spaceToastService.show("Fail to get list", error, 'bg-danger text-light')
      }
    })
  }

  createNewAdmin() {
    this.router.navigate(["../create"], { relativeTo: this.route })
  }

  editAdmin(id: number){
    this.router.navigate([`../edit/${id}`], { relativeTo: this.route })
  }

  deleteAdmin(id: number) {
    if(confirm("Are you sure to delete this admin")){
      this.adminsListViewModel.deleteAdmin(id).subscribe({
        next: (_: any) => {
          const index = this.admins.findIndex(role => role.id === id);
          if (index) {
            this.admins.splice(index, 1);
          }
        },
        error: error => {
          this.spaceToastService.show("Fail to delete role", error, 'bg-danger text-light')
        }
      })
    }
  }
}
