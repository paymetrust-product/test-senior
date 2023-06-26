import {Inject, Injectable, InjectionToken} from '@angular/core';
import {ICommentRepository} from "../models/ICommentRepository";
import {Comment} from "../interfaces/Comment";
import {Observable} from "rxjs";

export const COMMEN_REPOSITORY_TOKEN = new InjectionToken<ICommentRepository>('CommentRepository');

@Injectable({
  providedIn: 'root'
})
export class DomainCommentService {

  constructor(@Inject(COMMEN_REPOSITORY_TOKEN) private commentRepository: ICommentRepository) {
  }

  getComment(id: number): Observable<Comment[]> {
    return this.commentRepository.getComments(id);
  }

  createComment(category: Comment): Observable<Comment> {
    return this.commentRepository.addComment(category);
  }
}
