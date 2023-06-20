import { compare, hash } from "../../../utils/encryption";
import { TokenManager } from "../../../utils/token";
import { authLoginDto, userDto } from "../../dto/user.dto";
import { UserRepository } from "../../repository/user.repository";
import { HttpStatusCode, ReturnMessage } from "../../types/types";
const userRepository = new UserRepository();
export class UserService {

    async login(data : authLoginDto): Promise<ReturnMessage> {

        let message = new ReturnMessage();
    
        if (!data.email || !data.password) {
            message.message = "Kindly fill all requested fields";
            message.code = 421;
            return message;
        }
    
        try{

            const result  = await userRepository.readByEmail(data.email);

            if(!result) {
                message.message = "User not found";
                message.code = HttpStatusCode.CODE_INTERNAL_SERVER_ERROR;
                return message;
            }
    
            if(!compare(data.password,result.password)){
                message.message = "Wrong password";
                message.code = HttpStatusCode.CODE_INTERNAL_SERVER_ERROR;
                return message;
            }
    
            message.code = HttpStatusCode.CODE_OK;
            message.returnObject = {
                ...result ,
                token : new TokenManager().sign(data)
            }
    
            return message;

        }catch(Exception ) {

            message.message = Exception.message;
            message.code = HttpStatusCode.CODE_INTERNAL_SERVER_ERROR;
            return message;
        }
       
    }


    async register(data : userDto) {

        let message = new ReturnMessage();
        data.password = hash(data.password);

        try 
        {
            // recuperer l'utilisateur existant en fonction de son email et son téléphone
            const userExists = await userRepository.isMailUsed(data.email);

           
            if(userExists == 0) {
                const result  = await userRepository.create(data as any);
                message.code = HttpStatusCode.CODE_OK;
                message.message = "Utilisateur crée avec succes";
                message.returnObject = result;
                return message;
            }

            message.code = 500;
            message.message = "Your email has already been used";
            return message;
            
            
        }
        catch(Exception){
            message.code = 500;
            message.message = Exception.message;
            return message;
        }
    }
    
}