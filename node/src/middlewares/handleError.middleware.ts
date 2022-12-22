import { AppError } from "../errors";
import { Request, Response, NextFunction } from "express";

export const handleErrorMiddleware = (error: Error, req: Request, res: Response, nex: NextFunction) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({ status: error.statusCode, message: error.message})
    }

    console.log("Internal Server Error", error)
    return res.status(500).json("Internal Server Error")
}