import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"
import { Livro } from "../model/Livro"
import { SeederOptions } from 'typeorm-extension';
import LivroSeeder from "../seeds/LivroSeeder";
import * as dotenv from "dotenv";
dotenv.config();

let port: any = process.env.DB_PORT;

const dataSourceOptions: DataSourceOptions & SeederOptions = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [Livro],
    migrations: [],
    subscribers: [],
    seeds: [LivroSeeder],
};

export const AppDataSource = new DataSource(dataSourceOptions)
