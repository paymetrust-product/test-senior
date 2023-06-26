import {Component} from '@angular/core';
import {Article} from "@core/interfaces/Article";
import {DomainArticleService} from "@core/services/domain-article.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  news: Article[] = [];
  loading: boolean = true;

  constructor(private domainNewsService: DomainArticleService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.domainNewsService.getArticles().subscribe((news: Article[]) => {
      this.loading = false;
      this.news = news;
    });
  }
}
