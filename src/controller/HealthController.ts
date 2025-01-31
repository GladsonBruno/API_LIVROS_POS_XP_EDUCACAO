import { NextFunction, Request, Response } from "express";

export class HealthController {

    async get (request: Request, response: Response, next: NextFunction) {
        return response.send('Application Online').status(200);
    }

}