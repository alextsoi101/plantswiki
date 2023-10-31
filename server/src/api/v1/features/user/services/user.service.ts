import UserRepository from '../repositories/user.repository';
import * as interfaces from '../interfaces/user.interfaces';
import { generateJwt, verifyJwt } from '../../../../shared/jwt/jwt';
import bcrypt from 'bcrypt';

class UserService {

  async registration(
    params: interfaces.RegistrationParams): Promise<interfaces.RegistrationResponse> {

    try {
      const hashPassword = await bcrypt.hash(params.password, 5);
      params.password = hashPassword;

      const user = await UserRepository.registration(params);
      const token = generateJwt(user.id, user.email, user.role);
      return {token};
    } catch (error) {
      throw error;
    }


  }

  async login(
    params: interfaces.LoginParams): Promise<interfaces.LoginResponse> {

      try {
        const user = await UserRepository.getUserByEmail(params.email);
        let comparePassword = bcrypt.compareSync(params.password, user.password);

        if (!comparePassword) {
          console.error('PASSWORD NOT MATCH')
          throw new Error;
        }

        const token = generateJwt(user.id, user.email, user.role);
        return {token};
      } catch (error) {
        throw error;
      }
  }

  async check(token: string): Promise<interfaces.CheckResponse> {

    const jwtPayload = verifyJwt(token) as interfaces.JwtPayload;

    const userId = jwtPayload.id;
    const userEmail = jwtPayload.email;
    const userRole = jwtPayload.role;

    const newtoken = generateJwt(userId, userEmail, userRole);
    return {newtoken};
  }

  async getUser(
    params: interfaces.GetUserParams): Promise<interfaces.GetUserResponse> {

      try {
        const user = await UserRepository.getUser(params);
        return {user};
      } catch (error) {
        throw error;
      }
  }

  async updateUser(
    params: interfaces.UpdateUserParams): Promise<interfaces.UpdateUserResponse> {

      try {
        const user = await UserRepository.updateUser(params);
        return {user};
      } catch (error) {
        throw error;
      }
  }

  async changePassword(
    params: interfaces.ChangePasswordParams): Promise<interfaces.ChangePasswordResponse> {
    
      try {
        const user = await UserRepository.getUser({id: params.id});
        const comparePassword = bcrypt.compareSync(params.oldpassword, user.password)
        if (!comparePassword) {
          throw new Error;
        }
        const hashPassword = await bcrypt.hash(params.newpassword, 5);
        await UserRepository.changePassword(params.id, hashPassword);

        const token = generateJwt(user.id, user.email, user.role);
        return {token};
      } catch (error) {
        throw error;
      }
  }
}

export default new UserService();