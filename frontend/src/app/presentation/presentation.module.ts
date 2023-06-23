import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {ArticleComponent} from "./article/article.component";
import {RouterLink} from "@angular/router";
import {LoadingComponent} from './loading/loading.component';
import {InscriptionComponent} from "./inscription/inscription.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent,
    ArticleComponent,
    LoadingComponent,
    InscriptionComponent,
    ConnexionComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
  ],
  exports: [
    HomeComponent,
    ArticleComponent,
    LoadingComponent,
    InscriptionComponent,
    ConnexionComponent
  ],
  providers: [],
})
export class PresentationModule {

}
