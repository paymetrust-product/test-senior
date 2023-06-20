import { authLoginDto, userDto } from './../../dto/user.dto';
import { ReturnMessage } from "../../types/types";

export interface IUserService {
    addUser(user : userDto) : Promise<ReturnMessage> ;
    getAll()  : Promise<ReturnMessage> ;
    getById(id : string)  :Promise<ReturnMessage> ;
    login(payload :authLoginDto) : Promise<ReturnMessage> ;
}