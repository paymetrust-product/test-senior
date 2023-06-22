import { HttpHeaders } from "@angular/common/http";

export class HttpHeaderBuilder  {

  private newHeader !: Required<{key : string , value : string | string[] }>;
  private header !: HttpHeaders ;

  constructor() {
    this.header =  new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE',
      'Accept': 'application/json',
    });

  }

  addHeader(header : typeof this.newHeader) {
    this.header = this.header.set(header.key,header.value);
    return this;
  }

  build() {
    //console.log(this.header);
    return this.header;
  }
}
