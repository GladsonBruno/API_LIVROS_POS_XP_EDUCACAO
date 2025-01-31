import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"
import { Livro } from "../model/Livro"
import { SeederOptions } from 'typeorm-extension';
import LivroSeeder from "../seeds/LivroSeeder";
import * as dotenv from "dotenv";
dotenv.config();

export class AppDataSource {
    private static instance: DataSource;

    private static readonly port: any = process.env.DB_PORT;

    private static readonly dataSourceOptions: DataSourceOptions & SeederOptions = {
        type: "postgres",
        host: process.env.DB_HOST,
        port: this.port,
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

    private constructor() {
    }

    public static getInstance(): DataSource {
        if (!AppDataSource.instance) {
            AppDataSource.instance = new DataSource(this.dataSourceOptions);
        }
        return AppDataSource.instance;
    }

    public static initialize() {
        this.instance.initialize();
    }

}