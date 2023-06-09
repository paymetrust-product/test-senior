import { SpaceToastService } from './../../layout/services/space-toast.service';
import { RolesService } from './../services/roles.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleFormViewModel } from 'src/core/admin/space/roles/viewModel/RoleFormViewModel';
import { PermissionsService } from '../services/permissions.service';
import { RoleFormRequest } from 'src/core/admin/space/roles/entities/RoleRequest';

@Component({
  selector: 'role-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  roleFormViewModel: RoleFormViewModel;

  roleForm = new FormGroup({
    label: new FormControl('', Validators.required),
    permissions: new FormArray([]),
  });

  constructor(
    private rolesService: RolesService,
    private perissionsService: PermissionsService,
    private router: Router,
    private route: ActivatedRoute,
    private spaceToastService: SpaceToastService
    ){
    this.roleFormViewModel = new RoleFormViewModel(rolesService, perissionsService)
  }

  get formPermissions(){
    return this.roleForm.get('permissions') as FormArray
  }
  get formlabel(){
    return this.roleForm.get('label') as FormControl
  }

  ngOnInit(): void {
    const roleId = this.route.snapshot.paramMap.get('id');
    if(roleId){
      this.roleFormViewModel.roleId = Number(roleId)
      this.roleFormViewModel.setFormActioonToUpdate()
    }
    this.roleFormViewModel.getPermissions().subscribe({
      next: response=>{
        this.formlabel.setValue(response.role.label)
        response.permissions.forEach(permission=>{
          this.formPermissions.push(new FormControl(this.roleFormViewModel.checkRoleHavePermission(permission, response.role)))
        })
      },
      error: error=>{
        this.spaceToastService.show("Fail getting form infos", error, "bg-danger text-light")
      }
    })
  }

  submit(){
    if(this.roleForm.valid){
      const selectedPermissions = this.roleFormViewModel.filterSelectedIdPermissions(this.roleForm.value.permissions!)
      const roleFormRequest = new RoleFormRequest(this.roleForm.value.label!, selectedPermissions)

      this.roleFormViewModel.submitForm(roleFormRequest).subscribe({
        next: response=>{
          this.spaceToastService.show(this.roleFormViewModel.getActionTitle(), `Role ${roleFormRequest.label} ${this.roleFormViewModel.getActionTitle().toLocaleLowerCase()} with success`, "bg-success text-light")
          this.goBack()
        },
        error: error=>{
          this.spaceToastService.show("Fail to submlit", error, "bg-danger text-light")
        }
      })
    }
  }

  goBack(){
    this.router.navigate(["/space/roles"], {relativeTo: this.route})
  }
}
