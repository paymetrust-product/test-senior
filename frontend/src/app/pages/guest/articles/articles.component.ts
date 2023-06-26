import { Component, HostListener, OnInit, inject } from '@angular/core';
import { AppFacade } from 'src/app/core/facades/app.facade';
import { category } from 'src/app/core/interfaces/types';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {

  private appFacades = inject(AppFacade);
  categories?: category[];
  articles ?: any[];
  pageY: number = 0;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    this.pageY = window.pageYOffset;
  }

  ngOnInit(): void {
    this.loadCategory();
  }

  loadCategory() {
    this.appFacades.getCategories().subscribe({
      next: (response: any) => {

        this.categories = response.returnObject as category[];
        this.loadArticles();
      },
      error(err) {

      },
    });
  }

  loadArticles() {
    this.appFacades.getArticles().subscribe({
      next: (response: any) => {

        this.articles = response.returnObject;
      },
      error(err) {

      },
    });
  }
}
