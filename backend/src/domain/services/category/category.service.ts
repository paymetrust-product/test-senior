import { CategoryRepository } from './../../repository/categorie.repository';
import { categoryDto } from '../../dto/categorie.dto';
import { HttpStatusCode, ReturnMessage } from '../../types/types';
import { ICategoryService } from './ICategoryService';
const categoryRepository = new CategoryRepository();
export class CategoryService implements ICategoryService {

    async addCategory(category: categoryDto): Promise<ReturnMessage> {
        let message = new ReturnMessage();

        if(!category.flag || !category.libelle ) {
          message.code = HttpStatusCode.CODE_INTERNAL_SERVER_ERROR;
          message.message = "Kindly fill all requested fields";
          return message;
        }
    
        try {
          const result = await categoryRepository.create(category as any);
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
          const result = await categoryRepository.read();
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
          const result = await categoryRepository.readById(id);
          message.code = 200;
          message.returnObject = result;
        } catch (Exception) {
          message.code = HttpStatusCode.CODE_INTERNAL_SERVER_ERROR;
          message.message = Exception.message;
        }
    
        return message;
      }
    
}