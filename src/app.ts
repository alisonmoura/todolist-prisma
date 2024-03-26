import cors from "cors";
import express, { Application } from "express";
import { UserRouter } from "./router/user.router";

export class App {
    public server: Application;

    constructor() {
        this.server = express();
        this.cors();
        this.json();
        this.routes();
        this.server.get("/ping", (__, res) => {
            res.send("Todolist Prisma API, up and running...")
        });
    }

    private cors() {
        const allowedOrigins  = process.env.ALLOWED_ORIGINS?.split(",") || "*";
        this.server.use(cors({
            origin: allowedOrigins
        }));
    }

    private json() {    
        this.server.use(express.json());
    }

    private routes() {
        this.server.use("/users", UserRouter);
    }
}