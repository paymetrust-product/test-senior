import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ArticlesComponent } from './articles/articles.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const routes: Routes = [
  { path: '',   redirectTo: 'articles', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: "articles",
        component: ArticlesComponent
      },
      {
        path: "roles",
        loadChildren: ()=> import('./roles/roles.module').then(m=>m.RolesModule)
      },
      {
        path: "admins",
        loadChildren: ()=> import('./admins/admins.module').then(m=>m.AdminsModule)
      },
      {
        path: "unauthorized",
        component: UnauthorizedComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceRoutingModule { }
