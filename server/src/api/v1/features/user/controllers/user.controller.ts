import { Request, Response, NextFunction } from 'express';
import UserService from '../services/user.service';
import * as interfaces from '../interfaces/user.interfaces';
// import { RequestWithDecodedToken } from '../../../../v1/middleware/authMiddleware';
// import { ExtendedRequest } from '../../../../v1/middleware/authMiddleware';
import validateEmail from '../../../../shared/utils/validateEmail';

class UserController {

  async registration(
    req: Request<{}, {}, interfaces.RegistrationParams>,  
    res: Response, 
    next: NextFunction): Promise<void> {
    let { firstname, lastname, email, password, role } = req.body;
    role = 'USER';

    const validEmail = validateEmail(email);
    if (!validEmail) {
      throw new Error
    }

    try {
      const token = await UserService.registration({
        firstname, lastname, email, password, role
      });
      res.json(token);
    } catch (error) {
      return next(error);
    }
  }

  async login(
    req: Request<{}, {}, interfaces.LoginParams>,  
    res: Response, 
    next: NextFunction): Promise<void> {
    const { email, password } = req.body;


    try {
      const token = await UserService.login({email, password});
      res.json(token);
    } catch (error) {
      return next(error);
    }
  }

  async check(
    req: Request,
    res: Response, 
    next: NextFunction
  ): Promise<void> {
      const authHeader = req.headers.authorization;
      const token: string | undefined = authHeader ? authHeader.split(' ')[1] : undefined;

      if (!token) {
        throw new Error
      }

    try {
      const newtoken = await UserService.check(token);
      res.json(newtoken);
    } catch (error) {
      return next(error);
    }
  }

  async getUser(
    req: Request<interfaces.GetUserParams>,  
    res: Response, 
    next: NextFunction): Promise<void> {

    const { id } = req.params;

    try {
      const user = await UserService.getUser({id});
      res.json(user);
    } catch (error) {
      return next(error);
    }
  }

  async updateUser(
    req: Request<{}, {}, interfaces.UpdateUserParams, interfaces.Image>,  
    res: Response, 
    next: NextFunction): Promise<void> {
    const { id, email, firstname, lastname } = req.body;
    const image = req.files?.image;

    try {
      const user = await UserService.updateUser({id, email, firstname, lastname, image});
      res.json(user);
    } catch (error) {
      return next(error);
    }
  }

  async changePassword(
    req: Request<{}, {}, interfaces.ChangePasswordParams>,  
    res: Response, 
    next: NextFunction): Promise<void> {
    const {id, oldpassword, newpassword} = req.body

    try {
      const token = await UserService.changePassword({id, oldpassword, newpassword})
      res.json(token)
    } catch (error) {
      return next(error)
    }
  }
}

export default new UserController();