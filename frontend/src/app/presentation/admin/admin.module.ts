import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ArticleComponent} from "./article/article.component";
import {AuthComponent} from "./auth/auth.component";
import {UtilisateurComponent} from "./utilisateur/utilisateur.component";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
  ],
  exports: [
    CommonModule
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class AdminModule {
}
