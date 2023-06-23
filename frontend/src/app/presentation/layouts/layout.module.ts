import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AdminLayoutComponent} from "./admin-layout/admin-layout.component";
import {UserLayoutComponent} from "./user-layout/user-layout.component";
import {BlankLayoutComponent} from "./blank-layout/blank-layout.component";


@NgModule({
  declarations: [AdminLayoutComponent, UserLayoutComponent, BlankLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    AdminLayoutComponent,
    UserLayoutComponent,
    BlankLayoutComponent
  ]
})
export class LayoutModule {
}
