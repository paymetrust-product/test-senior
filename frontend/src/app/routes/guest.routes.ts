import { ArticleComponent } from './../pages/guest/article/article.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { ArticlesComponent } from '../pages/guest/articles/articles.component';

const routes : Routes = [
  {
    path : 'articles',
    component : ArticlesComponent
  },
  {
    path : 'article/{id}',
    component : ArticleComponent
  },
  {
    path : '',
    redirectTo : 'articles',
    pathMatch : 'full'
  }
]

@NgModule({
  declarations : [],
  imports :[RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class GuestRoutesModule {

}
