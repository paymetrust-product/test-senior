import {Comment} from "../interfaces/Comment";
import {Observable} from "rxjs";

export interface ICommentRepository {
  getComments(articleId: number): Observable<Comment[]>;

  addComment(user: Comment): Observable<Comment>;
}
