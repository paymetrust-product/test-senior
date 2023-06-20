import { categoryDto } from "../../dto/categorie.dto";
import { ReturnMessage } from "../../types/types";

export interface ICategoryService {
    addCategory(category : categoryDto) : Promise<ReturnMessage> ;
    getAll()  : Promise<ReturnMessage> ;
    getById(id : string)  :Promise<ReturnMessage> ;
}