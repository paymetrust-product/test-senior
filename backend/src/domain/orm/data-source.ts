import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import MainSeeder from "../seeds/mainSeeder";



export const options : DataSourceOptions & SeederOptions = {
  host: "127.0.0.1",
  type: "postgres",
  username: "postgres",
  password: "root",
  database: "postgres",
  synchronize: false,
  port : 5432,
  logging: true,
  entities: [__dirname + "./../entities/**/*.ts"],
  dropSchema : false,
  //migrationsTableName : "migrations",
  //migrations : [ __dirname + "./database/migrations/**/*.ts"] ,
  //seeds : [MainSeeder]
}

export const AppDataSource = new DataSource(options);


/*export const AppDataSource  = createConnection({
    
})*/