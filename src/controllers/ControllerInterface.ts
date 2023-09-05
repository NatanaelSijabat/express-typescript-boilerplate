import { Request, Response, NextFunction } from "express";


interface IController {
    index(req: Request, res: Response, next: NextFunction): Promise<Response>
    create(req: Request, res: Response, next: NextFunction): Promise<Response>
    show(req: Request, res: Response, next: NextFunction): Promise<Response>
    update(req: Request, res: Response, next: NextFunction): Promise<Response>
    delete(req: Request, res: Response, next: NextFunction): Promise<Response>
}

export default IController  