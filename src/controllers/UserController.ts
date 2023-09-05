import { Request, Response, NextFunction } from "express";
import IController from "./ControllerInterface";

class UserController implements IController {
    index = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        return res.send("index")
    }
    create = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        return res.send("create")
    }
    show = async(req: Request, res: Response, next: NextFunction): Promise<Response> => {
        return res.send("show")
    }
    update = async(req: Request, res: Response, next: NextFunction): Promise<Response> => {
        return res.send("update")
    }
    delete = async(req: Request, res: Response, next: NextFunction): Promise<Response> => {
        return res.send("delete")
    }
}

export default new UserController()