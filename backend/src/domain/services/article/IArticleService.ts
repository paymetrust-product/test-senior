import { ArticleDto } from './../../dto/article.dto';
import { ReturnMessage } from "../../types/types";

export interface IArticleService {
    addArticle(article : ArticleDto) : Promise<ReturnMessage> ;
    getAll()  : Promise<ReturnMessage> ;
    getById(id : string)  :Promise<ReturnMessage> ;
}