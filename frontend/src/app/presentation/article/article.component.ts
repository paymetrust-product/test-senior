import {Component} from '@angular/core';
import {Article} from "@core/interfaces/Article";
import {DomainArticleService} from "@core/services/domain-article.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  news: Article = {};
  loading: boolean = true;

  constructor(private domainNewsService: DomainArticleService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.domainNewsService.getArticle(1).subscribe((news: Article) => {
      this.loading = false;
      this.news = news;
    });
  }
}
