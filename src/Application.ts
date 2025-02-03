import { AppConfig } from "./config/AppConfig";

export class Application {
    public static main(): void {
        const app = new AppConfig();
        app.start();
    }
}

Application.main();