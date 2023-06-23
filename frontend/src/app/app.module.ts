import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from "./presentation/layouts/layout.module";
import {ARTICLE_REPOSITORY_TOKEN} from "./core/services/domain-article.service";
import {ArticleRepositoryService} from "./data/repositories/article-repository.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {PresentationModule} from "@presentation/presentation.module";
import {CATEGORY_REPOSITORY_TOKEN} from "@core/services/domain-category.service";
import {CategoryRepositoryService} from "@data/repositories/category-repository.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    PresentationModule
  ],
  providers: [
    {provide: ARTICLE_REPOSITORY_TOKEN, useClass: ArticleRepositoryService},
    {provide: CATEGORY_REPOSITORY_TOKEN, useClass: CategoryRepositoryService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
