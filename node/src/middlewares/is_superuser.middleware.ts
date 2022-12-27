import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

export const is_superuserMiddleware = async ( request: Request, response: Response, next: NextFunction) => {
    if (request.user.is_superuser){
        return next()
    }
    else if ( request.user.user_id === parseInt(request.params.user_id)) {
        return next()
    }
    else{
        return response.status(403).json({detail:"You do not have permission to perform this action."})
    }
}