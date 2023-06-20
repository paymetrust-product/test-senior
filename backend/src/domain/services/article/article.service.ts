import { ArticleRepository } from './../../repository/article.repository';
import { ArticleDto } from './../../dto/article.dto';
import { HttpStatusCode, ReturnMessage } from "../../types/types";
import { IArticleService } from "./IArticleService";
const   articleRepository =  new ArticleRepository();
export class ArticleService  implements IArticleService{

  
    async addArticle(article : ArticleDto): Promise<ReturnMessage>  {
        let message = new ReturnMessage();
        try 
        {
          const result = await articleRepository.create(article as any);
          message.code = 200;
          message.returnObject = result;
        }
        catch(Exception){
          message.code = HttpStatusCode.CODE_INTERNAL_SERVER_ERROR;
          message.message = Exception.message;
        }

        return message;
    }
  
}