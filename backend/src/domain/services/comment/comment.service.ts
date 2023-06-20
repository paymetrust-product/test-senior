import { CommentRepository } from './../../repository/comment.repository';
import { commentDto } from '../../dto/comment.dto';
import { HttpStatusCode, ReturnMessage } from '../../types/types';
import { ICommentService } from './ICommentService';

const commentRepository = new CommentRepository();
export class CommentService  implements ICommentService{

    async addComment(comment: commentDto): Promise<ReturnMessage> {
       
        let message = new ReturnMessage();

        if(!!comment.article || !!comment.text || !!comment.user ) {
            message.code = HttpStatusCode.CODE_INTERNAL_SERVER_ERROR;
            message.message = "Kindly fill all requested fields";
            return;
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
    async getAll(): Promise<ReturnMessage> {
        throw new Error('Method not implemented.');
    }
    async getById(id: string): Promise<ReturnMessage> {
        throw new Error('Method not implemented.');
    }
    
}