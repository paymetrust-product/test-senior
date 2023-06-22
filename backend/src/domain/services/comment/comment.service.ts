import { CommentRepository } from './../../repository/comment.repository';
import { commentDto } from '../../dto/comment.dto';
import { HttpStatusCode, ReturnMessage } from '../../types/types';
import { ICommentService } from './ICommentService';
import { ArticleService } from '../article/article.service';
import { UserService } from '../user/user.service';


const commentRepository = new CommentRepository();
const articleService    = new ArticleService();
const userService       = new UserService();

export class CommentService  implements ICommentService{


  async addComment(comment: commentDto): Promise<ReturnMessage> {
       
    let message = new ReturnMessage();

    if(!comment.article || !comment.text || !comment.user ) {
        message.code    = 421;
        message.message = "Kindly fill all requested fields";
        return message;
    }


    message = await articleService.getById(comment.article);

    if(message.code != HttpStatusCode.CODE_OK){
      message.code = HttpStatusCode.CODE_INTERNAL_SERVER_ERROR;
      message.message = "Post with this ID doesn't exists in the DB";
      return message;
    }


    message = await userService.getUserById(comment.user);

    if(!message.returnObject){
      message.code = HttpStatusCode.CODE_INTERNAL_SERVER_ERROR;
      message.message = "User with this id doesn't exist";
      return message;
    }


    try {
        const result = await commentRepository.create(comment as any);
        message.code = 200;
        message.returnObject = result;
    } catch (Exception) {
        message.code = HttpStatusCode.CODE_INTERNAL_SERVER_ERROR;
        message.message = Exception.message;
    }
      
    return message;
  }

    
  async getAll() {
    let message = new ReturnMessage();
    try {
      const result = await commentRepository.read();
      message.code = 200;
      message.returnObject = result;
    } catch (Exception) {
      message.code = HttpStatusCode.CODE_INTERNAL_SERVER_ERROR;
      message.message = Exception.message;
    }
    
    return message;
  }
    
  async getById(id: string) {
    let message = new ReturnMessage();
    try {
      const result = await commentRepository.readById(id);
      message.code = 200;
      message.returnObject = result;
    } catch (Exception) {
      message.code = HttpStatusCode.CODE_INTERNAL_SERVER_ERROR;
      message.message = Exception.message;
    }
    
    return message;
  }
    
}