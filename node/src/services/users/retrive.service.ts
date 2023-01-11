import User from "../../entities";
import AppDataSource from "../../data-source";


export const retriveUserService = async (id: number):Promise<User> => {
    const userRepository = AppDataSource.getRepository(User)
    const userFind = await userRepository.findOneBy({id})
    console.log(userFind)
    return userFind!
}