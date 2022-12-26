import AppDataSource from "../../data-source";
import User from "../../entities";

export const listUserService = async ():Promise<User[]> => {
    const userRepository = AppDataSource.getRepository(User)
    const list = await userRepository.find();
    return list
}