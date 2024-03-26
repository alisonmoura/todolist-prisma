import { Request, Response } from "express";
import { UserService } from "../service/user.service";
import { log } from "console";
import { ResponseException } from "../exception/response.exception";

export class UserController {

    public static async findAllUsers(__: Request, res: Response) {
        try {
            res.json(await UserService.findAll());
        } catch (error: any) {
            log(`Error at findAllUsers: ${error.message || error}`);
            res
                .status(error.statusCode || 500)
                .send(error.message || error);
        }
    }

    public static async findUserById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            if(!id) throw new Error("The id should be informed");
            const result = await UserService.findById(Number.parseInt(id));
            if(!result) throw new ResponseException("User not found", 400);
            res.json(result);
        } catch (error: any) {
            log(`Error at findUserById: ${error.message || error}`);
            res
                .status(error.statusCode || 500)
                .send(error.message || error);
        }
    }

    public static async createUser(req: Request, res: Response) {
        try {
            res.json(await UserService.createUser(req.body));
        } catch (error: any) {
            log(`Error at createUser: ${error.message || error}`);
            res
                .status(error.statusCode || 500)
                .send(error.message || error);
        }
    }

}