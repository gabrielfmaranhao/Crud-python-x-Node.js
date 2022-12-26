import { AppError } from "../../errors";
import User from "../../entities";
import AppDataSource from "../../data-source";
import { IUserRequest } from "../../interfaces";
import {hash} from "bcrypt"


export const createUserService = async ( data:IUserRequest ) :Promise<User> => {
    const userRepository = AppDataSource.getRepository(User)
    const findUser = await userRepository.findOneBy({username: data.username})
    if (findUser) {
        throw new AppError("A user with that username already exists.", 400)
    }
    const findUserEmail = await userRepository.findOneBy({email: data.email})
    if (findUserEmail) {
        throw new AppError("This field must be unique.", 400)
    }
    const passwordHash = await hash(data.password,12)
    const bcrypt = "bcrypt$"
    data.password =  bcrypt.concat(passwordHash)
    const user = userRepository.create(data)
    await userRepository.save(user)
    return user
}