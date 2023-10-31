import User from "../models/user.model";
import * as interfaces from '../interfaces/user.interfaces';

class UserRepository {

  async registration(
    params: interfaces.RegistrationParams): Promise<interfaces.IUser> {
    
    try {
      const user = await User.create({
        email: params.email,
        password: params.password,
        firstname: params.firstname,
        lastname: params.lastname,
        role: params.role,
      })
      return user;
    } catch (error) {
      throw error;
    }
  }

  async getUser(
    params: interfaces.GetUserParams): Promise<interfaces.IUser> {
    
    const user = await User.findById(params.id).exec();
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

  async getUserByEmail(email: string): Promise<interfaces.IUser> {
    
    const user = await User.findOne({email: email});
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

  async updateUser(
    params: interfaces.UpdateUserParams): Promise<interfaces.IUser> {

    let valuesToUpdate: any = {};
    if (params.email) {
      valuesToUpdate.email = params.email;
    }
    if (params.firstname) {
      valuesToUpdate.firstname = params.firstname;
    }
    if (params.lastname) {
      valuesToUpdate.lastname = params.lastname;
    }
    if (params.imageurl) {
      valuesToUpdate.imageurl = params.imageurl;
    }
    
    const user = await User.findByIdAndUpdate(
      params.id,
      valuesToUpdate,
      { new: true }
      );
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

  async changePassword(id: number, password: string): Promise<void> {
    const user = await User.findByIdAndUpdate(id, {password: password});
    if (!user) {
      throw new Error("User not found");
    }
  }
}

export default new UserRepository();