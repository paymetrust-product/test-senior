import { inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { AppFunctionService } from '../functions/app.function';
import { StorageService } from '../services/storage/Storage.service';

@Injectable({
  providedIn : 'root'
})
export class AppFacade {

  private appFunction    = inject(AppFunctionService);
  private storageService = inject(StorageService);

  getCategories() {
    return this.appFunction.getCategories();
  }

  getArticles() {
    return  this.appFunction.getArticles();
  }


  getArticle(id : string) {
    return this.appFunction.getArticle(id);
  }

  addComment(commentDto  : any) {
    return this.appFunction.addComment(commentDto);
  }

  login(data:any) {
    return this.appFunction.login(data);
  }

  register(data :any) {
    //return this.appFunction.register(data);
  }

  /*--------------------------------*/

  setStorage(data  : {key : string ,value : any}) {
    return this.storageService.set(data);
  }
  getStorage(key : string) {
    return this.storageService.get(key);
  }
  deleteStorage(key : string) {
    return this.storageService.delete(key);
  }
  /*--------------------------------*/
}
