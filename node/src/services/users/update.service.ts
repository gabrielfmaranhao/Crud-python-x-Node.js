import AppDataSource from "../../data-source";
import User from "../../entities";
import { AppError } from "../../errors";
import { IUpdateUser } from "../../interfaces";
import {hash} from "bcrypt"

export const updateUserService = async (user_id: number, data:IUpdateUser):Promise<User> => {
    const userRepository = AppDataSource.getRepository(User)
    const findUser = await userRepository.findOneBy({id: user_id})
    if (!findUser) {
        throw new AppError("User not found.", 404)
    }
    const findUserUsername = await userRepository.findOneBy({username: data.username})
    if (findUserUsername) {
        throw new AppError("A user with that username already exists")
    }
    const findUserEmail = await userRepository.findOneBy({email: data.email})
    if (findUserEmail ) {
        throw new AppError("This field email must be unique.")
    }
    if ( data.password ) {
        data.password = "bcrypt$".concat(await hash(data.password,12))
    }
    await userRepository.update(user_id, data)
    const user = await userRepository.findOneBy({id: user_id});
    return user!
}