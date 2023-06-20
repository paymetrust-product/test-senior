import { UserService } from "../domain/services/user/user.service";
import { logger } from "../utils/logger";

const userService =  new UserService();

export class userController {
    async login(req : any , res : any ) {
        logger.info("login : ",req.body)
        const result =  await userService.login({...req.body});
        logger.info("login response : " ,result)
        res.status(result.code).send(result);
      }
  
  
    async register(req: any ,res : any) {
        logger.info("register : ",req.body)
        const result =  await userService.register({...req.body});
        logger.info("register response : ",req.body)
        res.status(result.code).send(result);
    }
}