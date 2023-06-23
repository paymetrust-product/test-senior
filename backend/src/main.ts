import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import 'reflect-metadata';
import { AppDataSource } from './infrastructure/data-sources/postgresql/data-source';
import router from './application/routers';
import morgan from 'morgan';
import { Application } from 'express';

dotenv.config();

const app: Application = express();

const port = process.env.APP_PORT;
const host = process.env.APP_HOST;

AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
  })
  .catch((error) => console.log(error));

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/', router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at ${host}:${port}`);
});
