

import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { HttpHeaderBuilder } from '../../builders/Header.builder';
import { environment } from "src/environment/env.prod";
import { UserQuery } from "src/app/store/user$/user.query";

@Injectable()
export class HttpService {

  apiType : string = "rest";
  private userQuery : UserQuery = inject(UserQuery);

  constructor(private http : HttpClient) {

  }

  setApiType(apiType : string){
   this.apiType = apiType;
  }

  get<T>(endpoint : string ) {
    return this.http.get<T>(`${this.getBaseUrl()}${endpoint}`,{headers : this.httpHeader()});
  }

  post<T>(parameter : Required<{endpoint : string , data : any}> ) {
    return this.http.post<T>(`${this.getBaseUrl()}${parameter.endpoint}`,parameter.data, {headers : this.httpHeader()} );
  }

  put<T>(parameter : Required<{endpoint : string , data : any}>) {
    return this.http.put<T>(`${this.getBaseUrl()}${parameter.endpoint}`, parameter.data,{headers : this.httpHeader()});
  }

  delete<T>(endpoint : string) {
    return this.http.delete<T>(`${this.getBaseUrl()}${endpoint}`,{headers : this.httpHeader()});
  }

  getBaseUrl() {
    switch(this.apiType) {
      case "rest" :
         return environment.BASE_URL;
      case "assets" :
        return "/assets/";
      default :
        return environment.BASE_URL;
    }
  }


  httpHeader() {
    return  new HttpHeaderBuilder()
    .addHeader({key:'Authorization' , value : `Bearer ${this.userQuery.User?.token?.toString()}`})
    .build();
   ;
  }

}
