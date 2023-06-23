import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./presentation/home/home.component";
import {ArticleComponent} from "./presentation/article/article.component";
import {UserLayoutComponent} from "./presentation/layouts/user-layout/user-layout.component";
import {BlankLayoutComponent} from "./presentation/layouts/blank-layout/blank-layout.component";
import {InscriptionComponent} from "./presentation/inscription/inscription.component";

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {path: '', component: HomeComponent, title: 'Accueil'},
      {path: 'article/:id', component: ArticleComponent, title: 'Article'},
    ]
  },
  {
    path: 'user',
    component: BlankLayoutComponent,
    children: [
      {path: 'signup', component: InscriptionComponent, title: 'Inscription'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
