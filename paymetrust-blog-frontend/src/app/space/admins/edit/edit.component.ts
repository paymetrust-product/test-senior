import { AdminsService } from './../services/admins.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminFormRequest } from 'src/core/admin/space/admins/entities/AdminFormRequest';
import { SpaceToastService } from '../../layout/services/space-toast.service';
import { AdminFormViewModel } from 'src/core/admin/space/admins/viewModel/AdminFormViewModel';
import { RolesService } from '../../roles/services/roles.service';
import { AdminResponse } from 'src/core/admin/space/admins/entities/AdminResponse';

@Component({
  selector: 'admin-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  adminFormViewModel: AdminFormViewModel;
  admin: AdminResponse | undefined;
  adminForm: FormGroup | undefined;

  constructor(
    private adminsService: AdminsService,
    private rolesService: RolesService,
    private router: Router,
    private route: ActivatedRoute,
    private spaceToastService: SpaceToastService
  ) {
    this.adminFormViewModel = new AdminFormViewModel(adminsService, rolesService)
  }

  get formUsername() {
    return this.adminForm?.get('username') as FormControl
  }

  get formRole() {
    return this.adminForm?.get('role') as FormControl
  }

  get formPassword() {
    return this.adminForm?.get('password') as FormControl
  }

  get formConfirmPassword() {
    return this.adminForm?.get('confirmPassword') as FormControl
  }

  ngOnInit(): void {
    const adminId = this.route.snapshot.paramMap.get('id');
    if (adminId) {
      this.adminFormViewModel.adminId = Number(adminId)
      this.adminFormViewModel.setFormActioonToUpdate()

      this.adminForm = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.minLength(4)),
        confirmPassword: new FormControl(''),
        role: new FormControl(null, Validators.required)
      })
    }
    else {
      this.adminForm = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', [Validators.minLength(4), Validators.required]),
        confirmPassword: new FormControl(''),
        role: new FormControl(null, Validators.required)
      })
    }

    this.adminFormViewModel.getRoles().subscribe({
      next: response => {
        this.admin = response.admin
        this.formUsername.setValue(response.admin.username);
        this.formRole.setValue(response.admin.role?.id);
      },
      error: error => {
        this.spaceToastService.show("Fail getting form infos", error, "bg-danger text-light")
      }
    })
  }

  checkPaasswordConfirmation() {
    return this.formConfirmPassword.value === this.formPassword.value
  }

  submit() {
    if (this.adminForm?.valid && this.checkPaasswordConfirmation()) {
      const password = this.adminForm?.value.password
      const adminFormRequest = new AdminFormRequest(
        this.adminForm?.value.username,
        Number(this.adminForm?.value.role),
        (password && password?.length > 0) ? password : undefined
      )

      this.adminFormViewModel.submitForm(adminFormRequest).subscribe({
        next: response => {
          this.spaceToastService.show(this.adminFormViewModel.getActionTitle(), `Role ${adminFormRequest.username} ${this.adminFormViewModel.getActionTitle().toLocaleLowerCase()} with success`, "bg-success text-light")
          this.goBack()
        },
        error: error => {
          this.spaceToastService.show("Fail to submlit", error, "bg-danger text-light")
        }
      })
    }
  }

  goBack() {
    this.router.navigate(["/space/admins"], { relativeTo: this.route })
  }
}
