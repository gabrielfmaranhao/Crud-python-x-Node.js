import AppDataSource from "../../data-source";
import { AppError } from "../../errors";
import User from "../../entities";

export const deleteUserService = async ( user_id:number):Promise<void> => {
    const userRepository = AppDataSource.getRepository(User)
    const findUser = userRepository.findOneBy({id: user_id})
    if( !findUser) {
        throw new AppError("User not found.", 404)
    }
    await userRepository.update(user_id,{is_active: false})
}