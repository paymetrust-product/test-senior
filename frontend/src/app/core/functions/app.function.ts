import { Injectable, inject } from '@angular/core';
import { shareReplay } from 'rxjs';
import { HttpService } from '../services/api/Http.service';

@Injectable({
  providedIn : 'root'
})
export class AppFunctionService {

  private  readonly api = inject(HttpService);

  getCategories() {
    this.api.setApiType("rest");
    return this.api.get(`api/category`).pipe(shareReplay(1));
  }

  getArticles() {
    this.api.setApiType("rest");
    return this.api.get(`api/article`).pipe(shareReplay(1));
  }

  getArticle(id : string) {
    this.api.setApiType("rest");
    return this.api.get(`api/article/`+ id).pipe(shareReplay(1));
  }

}
