import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppFacade } from 'src/app/core/facades/app.facade';
import { StatesFacades } from 'src/app/core/facades/state.facade';
import { UtilsFacades } from 'src/app/core/facades/utils.facade';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  private appFacades = inject(AppFacade);
  private router     = inject(ActivatedRoute);
  public state       = inject(StatesFacades);
  private utils      = inject(UtilsFacades);

  article: any;
  id?: string;
  comment!: string;

  constructor() {}

  ngOnInit(): void {
    this.getId();
    this.loadArticle();
  }

  getId() {
    this.router.params.subscribe((params: any) => {
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

  addComment() {
    this.appFacades
      .addComment({
        text: this.comment,
        article: this.id,
        user: this.state?.User?.user?.id,
      })
      .subscribe({
        next: (response: any) => {
          console.log(response);
          this.article = response.returnObject;
          this.utils.successToastMessage("Comment successfully added");
        },
        error(err) {
          console.log(err);
        },
      });
  }
}
