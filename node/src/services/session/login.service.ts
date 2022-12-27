import { compare } from 'bcrypt';
import AppDataSource from '../../data-source';
import User from '../../entities';
import { AppError } from '../../errors';
import { ISessionLogin } from '../../interfaces';
import  jwt  from 'jsonwebtoken';

export const sessionLoginService = async(data:ISessionLogin):Promise<string> => {
    const userRepository = AppDataSource.getRepository(User)
    const findUser = await userRepository.findOneBy({username: data.username});
    
    if (!findUser) {
        throw new AppError("No active account found with the given credentials",401)
    }
    const sliceForCompare = findUser.password.slice(7)
    const passwordMatch = await compare(data.password, sliceForCompare);

    if(!passwordMatch) {
        throw new AppError("No active account found with the given credentials",401)
    }

    if(!findUser.is_active) {
        throw new AppError("No active account found with the given credentials",401)
    }

    const token = jwt.sign({user_id: findUser.id}, process.env.SECRET_KEY as string, {subject: findUser.email, expiresIn: "24h"})
    return token

}