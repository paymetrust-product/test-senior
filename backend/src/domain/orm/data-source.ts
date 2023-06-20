import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import MainSeeder from "../seeds/mainSeeder";



export const options : DataSourceOptions & SeederOptions = {
  host: "127.0.0.1",
  type: "postgres",
  username: "root",
  password: "password",
  database: "paymetrust",
  synchronize: false,
  logging: true,
  entities: [__dirname + "./../entities/**/*.ts"],
  migrationsTableName : "migrations",
  migrations : [ __dirname + "./database/migrations/**/*.ts"] ,
  dropSchema : false,
  seeds : [MainSeeder]
}

export const AppDataSource = new DataSource(options);


/*export const AppDataSource  = createConnection({
    
})*/