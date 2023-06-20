
import  express  from 'express';
import * as dotenv from 'dotenv';
import path from "path";
import boostraping from './src/server';
const app = express(); 
const multer = require("multer");
dotenv.config()
app.use(express.static(path.join("./public/")));
boostraping.init(app,3002);
export default app;