import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: '',
    children: [
      { path: 'list', pathMatch: 'full', component: ListComponent },
      { path: 'create', pathMatch: 'full', component: EditComponent },
      { path: 'edit/:id', pathMatch: 'full', component: EditComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
