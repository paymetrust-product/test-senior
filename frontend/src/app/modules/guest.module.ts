import { RouterModule } from '@angular/router';
import { ArticlesComponent } from './../pages/guest/articles/articles.component';
import { ArticleComponent } from './../pages/guest/article/article.component';
import { NgModule } from '@angular/core';
import { GuestRoutesModule } from '../routes/guest.routes';
import { ComponentModule } from './component.module';
import { HttpClientModule } from '@angular/common/http';
import { ServiceModule } from './service.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports : [FormsModule,CommonModule,GuestRoutesModule,RouterModule,ComponentModule,HttpClientModule,ServiceModule],
  declarations : [ArticleComponent,ArticlesComponent]
})
export class GuestModule {

}
