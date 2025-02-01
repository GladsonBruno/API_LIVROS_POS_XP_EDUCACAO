import { AppConfig } from "./config/AppConfig";

export class Application {
    public static start(): void {
        const app = new AppConfig();
        app.start();
    }
}

Application.start();