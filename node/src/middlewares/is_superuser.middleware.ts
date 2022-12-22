import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

export const is_superuserMiddleware = async ( request: Request, response: Response, next: NextFunction) => {
    if (request.user.is_superuser){
        return next()
    }
    else if ( request.user.username === request.body.username) {
        return next()
    }
    else{
        return new AppError("user Não autorizado", 403)
    }
}