import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import User from "../entities";
import AppDataSource from "../data-source";
export const verifyAuthTokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const userRepository = AppDataSource.getRepository(User)
    let token = req.headers.authorization;
    if(!token) {
        return res.status(401).json({detail:"Authorization header must contain two space-delimited values", code:"bad_authorization_header"})
    }

    token = token.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY as string, async (error: any, decode: any)=> {
        if(error) {
            return res.status(401).json({
                detail: "Given token not valid for any token type",
                code: "token_not_valid"
            });
        }
        const user = await userRepository.findOneBy({id: decode.user_id})
        req.user = {username: user!.username, id: decode.sub, is_superuser: user!.is_superuser}
        return next()
    })
    
}