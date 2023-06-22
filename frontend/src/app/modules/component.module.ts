import { NgModule } from '@angular/core';
import { NavbarComponent } from '../components/shared/navbar/navbar.component';
import { FooterComponent } from '../components/shared/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CategoryItemComponent } from '../components/widgets/category-item/category-item.component';
import { CategoryListComponent } from '../components/widgets/category-list/category-list.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports : [RouterModule,CommonModule],
  declarations: [
    NavbarComponent,
    FooterComponent,
    CategoryItemComponent,
    CategoryListComponent
  ],
  exports : [
    NavbarComponent,
    FooterComponent,
    CategoryItemComponent,
    CategoryListComponent
  ]
})
export class ComponentModule {

}
