import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceRoutingModule } from './space-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { TopBarComponent } from './layout/components/top-bar/top-bar.component';
import { ArticlesComponent } from './articles/articles.component';
import { NgbModule, NgbCollapseModule, NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthorizationInterceptor } from './interceptors/authorization.interceptor';
import { ToastComponent } from './layout/components/toast/toast.component';



@NgModule({
  declarations: [
    LayoutComponent,
    TopBarComponent,
    ArticlesComponent,
    UnauthorizedComponent,
    ToastComponent
  ],
  imports: [
    SpaceRoutingModule,
    CommonModule,
    NgbModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbNavModule,
  ]
})
export class SpaceModule { }
