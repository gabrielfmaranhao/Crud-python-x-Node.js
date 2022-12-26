import AppDataSource from "../../data-source";
import User from "../../entities";
import { AppError } from "../../errors";
import { IUpdateUser } from "../../interfaces";

export const updateUserService = async (user_id: number, data:IUpdateUser):Promise<User> => {
    const userRepository = AppDataSource.getRepository(User)
    const findUser = await userRepository.findOneBy({id: user_id})
    if (!findUser) {
        throw new AppError("User not found.", 404)
    }
    await userRepository.update(user_id, data)
    const user = await userRepository.findOneBy({id: user_id});
    return user!
}