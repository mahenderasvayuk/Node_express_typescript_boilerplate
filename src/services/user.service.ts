import model from "../models";
import { UserData } from '../types/user';

class UserService {
    constructor() { };
    async createNewuser(data: UserData) {
        const status = await model.UserModel.create(data);
        return status
    }
}