import { Request, Response } from "express";
import { AppError } from "../../errors";
import { ISessionLogin } from "../../interfaces";
import { sessionLoginService } from "../../services/session/login.service";

export const loginUserController =  async (request: Request, response: Response) => {
    try {
        const data: ISessionLogin = request.body
        const token: string = await sessionLoginService(data)
        return response.status(200).json({access: token})
    } catch (error) {
        if ( error instanceof AppError) {
            return response.status(error.statusCode).json({detail: error.message})
        }
    }
}