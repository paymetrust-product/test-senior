import { Injectable, inject } from '@angular/core';
import { shareReplay } from 'rxjs';
import { HttpService } from '../services/api/Http.service';
import { loginDto } from '../interfaces/dto/user.dto';

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

  login(payload : loginDto) {
    this.api.setApiType("rest");
    return this.api.post({endpoint : `api/login`,data : payload}).pipe(shareReplay(1));
  }

  addComment(payload : loginDto) {
    this.api.setApiType("rest");
    return this.api.post({endpoint : `api/comment`,data : payload}).pipe(shareReplay(1));
  }

}
