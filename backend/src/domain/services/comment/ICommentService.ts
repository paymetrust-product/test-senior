import { commentDto } from "../../dto/comment.dto";
import { ReturnMessage } from "../../types/types";

export interface ICommentService {
    addComment(comment : commentDto) : Promise<ReturnMessage> ;
    getAll()  : Promise<ReturnMessage> ;
    getById(id : string)  :Promise<ReturnMessage> ;
}