import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const verifyAuthTokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers.authorization;
    if(!token) {
        return res.status(401).json({status: 401, message: "Precisa de token"})
    }

    token = token.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY as string, (error: any, decode: any)=> {
        if(error) {
            return res.status(401).json({
                message: "Invalid token",
            });
        }
        req.user = {username: decode.username, id: decode.sub, is_superuser: decode.is_superuser}
    })
    return next();
}