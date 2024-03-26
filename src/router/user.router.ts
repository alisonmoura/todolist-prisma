import { Router } from "express";
import { UserController } from "../controller/user.controller";

const UserRouter: Router = Router();

UserRouter.get("/", UserController.findAllUsers);
UserRouter.get("/:id", UserController.findUserById);
UserRouter.post("/", UserController.createUser);

export { UserRouter };