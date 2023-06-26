import { UserController } from './../controller/user.controller';
import express from "express";


/*********************************************** */
const authRoutes     = express.Router();
const userController = new UserController();
/*********************************************** */


authRoutes.post("/api/login",userController.login);
authRoutes.post("/api/register",userController.register);
export default authRoutes;