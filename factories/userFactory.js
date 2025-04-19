import { pool } from "../db.js"
import { UserRepository } from "../repositories/userRepository.js"
import { UserServices } from "../services/userServices.js";

const generateUserInstance = () => {
    const userRepository = new UserRepository({db: pool});
    const userService = new UserServices({userRepository: userRepository}) ;
    return userService ;
}

export {
    generateUserInstance
}