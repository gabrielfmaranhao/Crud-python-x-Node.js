import { Request, Response } from "express";
import { AppError } from "../../errors";
import { IUserRequest, IUserResponse } from "../../interfaces";
import { createUserService, deleteUserService, detailUserService, listUserService, retriveUserService,updateUserService } from "../../services";
export const createUserController = async (request: Request, response: Response) => {
    try {
        const data : IUserRequest = request.body
        const user: IUserResponse = await createUserService(data)
        const {password, is_staff, ...createUserRest} = user
        return response.status(201).json(createUserRest)
    } catch (error) {
        if(error instanceof AppError) {
            return response.status(error.statusCode).json({detail: error.message})
        }
        
    }
}//OK 
export const listUserController = async (request: Request, response: Response) => {
    const list = await listUserService();
    const newList = list.map((obj) => {
        const {password, is_staff, ...rest} = obj
        return rest
    })
    return response.status(200).json(newList)
}//OK
export const updateUserController = async (request: Request, response: Response) => {
    try {
        const user_id = request.params.user_id;
        console.log(user_id)
        const data = request.body
        const user = await updateUserService(parseInt(user_id), data)
        const {password, is_staff, ...rest} = user
        return response.status(200).json(rest)
    } catch (error) {
        if(error instanceof AppError) {
            return response.status(error.statusCode).json({detail: error.message})
        }
    }
}//OK
export const deleteUserController = async (request: Request, response: Response) => {
    try {
        const user_id = request.params.user_id
        await deleteUserService(parseInt(user_id))
        return response.status(200).json({})
    } catch (error) {
        if(error instanceof AppError) {
            return response.status(error.statusCode).json({detail: error.message})
        }
        
    }
}//OK
export const detailUserController = async (request: Request, response: Response) => {
    try {
        const user_id = request.params.user_id
        const user = await detailUserService(parseInt(user_id))
        const {password, is_staff, ...rest} = user
        return response.status(200).json(rest)
    } catch (error) {
        if(error instanceof AppError) {
            return response.status(error.statusCode).json({detail: error.message})
        }
    }
}//OK 
export const retriveUserController = async (request: Request, response: Response) => {
    const user = await retriveUserService(request.user.user_id);
    const {password, is_staff, ...rest} = user
    return response.status(200).json(rest)
}//OK
