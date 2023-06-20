import  express  from 'express';
import { authMiddleware } from '../utils/authorization';
import {CategoryController } from '../controller/category.controller';

/********************************************************/
const categoryRoutes      = express.Router();
const categoryController  = new CategoryController();
/********************************************************/

categoryRoutes.post("/api/category",authMiddleware,categoryController.save);
categoryRoutes.get("/api/category",categoryController.find);
categoryRoutes.get("/api/category/:id",categoryController.findById);
categoryRoutes.put("/api/category",authMiddleware,categoryController.save);
categoryRoutes.delete("/api/category/:id",authMiddleware,categoryController.save);

export {categoryRoutes}