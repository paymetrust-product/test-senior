import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppFacade } from 'src/app/core/facades/app.facade';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  private appFacades = inject(AppFacade);
  article : any;
  id ?: string ;


  constructor(private router : ActivatedRoute) {

  }

  ngOnInit(): void {
   this.getId();
   this.loadArticle();
  }

  getId(){
    this.router.params.subscribe((params : any)=>{
      this.id = params.id;
    });
  }

  loadArticle() {
    this.appFacades.getArticle(this.id as string).subscribe({
      next: (response: any) => {
        console.log(response);
        this.article = response.returnObject;
      },
      error(err) {
        console.log(err);
      },
    });
  }

}
