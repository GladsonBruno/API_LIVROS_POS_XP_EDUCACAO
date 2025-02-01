import express, { Express, Request, Response } from 'express';
import { Routes } from "../routes/routes";
import { AppDataSource } from './AppDataSource';
import { runSeeders } from 'typeorm-extension';
import * as bodyParser from "body-parser";
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import * as dotenv from "dotenv";
import { CorsOptions } from 'cors';

dotenv.config();

export class AppConfig {
    private readonly app: Express;
    private readonly port: number | string;
    private readonly dataSource = AppDataSource.getInstance();
    private readonly cors = require('cors');

    constructor() {
        this.app = express();
        this.port = process.env.APPLICATION_PORT || 8080;
        this.initializeMiddlewares();
        this.initializeSwaggerDocs();
        this.initializeRoutes();
    }

    private initializeMiddlewares(): void {
        this.app.disable("x-powered-by");

        const corsOptions: CorsOptions = {
            allowedHeaders: [
                'Origin',
                'X-Requested-With',
                'Content-Type',
                'Accept',
                'X-Access-Token',
            ],
            methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
            origin: '*',
            preflightContinue: false,
        };

        this.app.use(this.cors(corsOptions));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));

    }

    private initializeSwaggerDocs(): void {
        const swaggerOptions = {
            swaggerDefinition: {
                openapi: '3.0.0',
                info: {
                    title: 'Livro API',
                    version: '1.0.0',
                    description: 'API para gerenciamento de livros',
                },
                servers: [
                    {
                        url: 'http://localhost:8080',
                    },
                ],
            },
            apis: ['./src/routes/*.ts'],
        };

        const swaggerDocs = swaggerJsDoc(swaggerOptions);
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
    }

    private initializeRoutes(): void {
        Routes.forEach(route => {
            (this.app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
                (new (route.controller as any))[route.action](req, res, next);
            });
        });
    }

    private async initializeDatabase(): Promise<void> {
        await this.dataSource.initialize();
        await runSeeders(this.dataSource);
    }

    public start(): void {
        this.initializeDatabase().then(() => {
            this.app.listen(this.port, () => {
                console.log(`API disponível na porta ${this.port}`);
                console.log(`Documentação disponível em http://localhost:${this.port}/api-docs`);
            });
        }).catch(error => {
            console.error('Erro ao inicializar o banco de dados:', error);
        });
    }
}
