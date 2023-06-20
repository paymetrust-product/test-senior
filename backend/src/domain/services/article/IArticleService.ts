import { ArticleDto } from './../../dto/article.dto';
import { ReturnMessage } from "../../types/types";

export interface IArticleService {
    addArticle(article : ArticleDto) : Promise<ReturnMessage> | ReturnMessage;
}