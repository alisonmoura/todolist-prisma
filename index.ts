import dotenv from "dotenv";
import { info } from "console";
import { App } from "./src/app";

dotenv.config();
const PORT = process.env.PORT || 3000;

new App().server.listen(PORT, () => {
    info(`Aplication started at port: ${PORT}`)
});