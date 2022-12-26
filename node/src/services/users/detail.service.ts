import AppDataSource from "../../data-source";
import User from "../../entities";
import { AppError } from "../../errors";


export const detailUserService = async (user_id:number):Promise<User> => {
    const userRepository = AppDataSource.getRepository(User)
    const findUser =await userRepository.findOneBy({id: user_id});
    if (!findUser) {
        throw new AppError("Not found.", 404)
    }
    return findUser
}