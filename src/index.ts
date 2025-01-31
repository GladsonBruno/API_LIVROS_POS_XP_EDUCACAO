import express, { Express, Request, Response } from 'express';
import * as cors from 'cors';
import { Routes } from "./routes/routes";
import { AppDataSource } from './config/AppDataSource';
import { runSeeders } from 'typeorm-extension';
import * as bodyParser from "body-parser";
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import * as dotenv from "dotenv";

const options: cors.CorsOptions = {
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

const dataSource = AppDataSource.getInstance();

dotenv.config();

const app: Express = express();
app.disable("x-powered-by");

let server;
let port = process.env.APPLICATION_PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

Routes.forEach(route => {
    (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
        (new (route.controller as any))[route.action](req, res, next);
    });
})


dataSource.initialize();

(async () => {
    await runSeeders(dataSource);
})();

server = app.listen(port);
console.log(`API disponível na porta ${port}`)
console.log(`Documentação disponível em http://localhost:${port}/api-docs`)