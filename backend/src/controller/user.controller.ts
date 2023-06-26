import { UserService } from "../domain/services/user/user.service";
import { logger } from "../utils/logger";

const userService =  new UserService();

export class UserController {
    async login(req : any , res : any ) {
        logger.info("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        logger.info("UserController ===> login");
        logger.info(req.body);
        const result =  await userService.login({...req.body});
        logger.info("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        logger.info(result);
        res.status(result.code).send(result);
      }
  
  
    async register(req: any ,res : any) {
        logger.info("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        logger.info("UserController ===> register");
        logger.info(req.body);
        const result =  await userService.register({...req.body});
        logger.info("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        logger.info(result);
        res.status(result.code).send(result);
    }
}