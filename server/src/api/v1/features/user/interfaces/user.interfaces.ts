import { Document } from 'mongoose';
import { FileArray, UploadedFile } from 'express-fileupload';

export interface IUser extends Document {
  id: number;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  imageurl?: string;
  role: string;
}

export interface JwtPayload {
  id: number;
  email: string;
  role: string;
}

export interface RegistrationParams {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  role?: string;
}

export interface RegistrationResponse {
  token: string;
}

export interface LoginParams {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface CheckResponse {
  newtoken: string;
}

export interface GetUserParams {
  id: number;
}

export interface GetUserResponse {
  user: {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    imageurl?: string;
  }
}

export interface UpdateUserParams {
  id: number;
  email?: string;
  firstname?: string;
  lastname?: string;
  image?: UploadedFile | UploadedFile[];
  imageurl?: string;
}

export interface Image {
  image?: UploadedFile | UploadedFile[];
}

export interface UpdateUserResponse {
  user: {
    email: string;
    firstname: string;
    lastname: string;
    imageurl?: string;
  }
}

export interface ChangePasswordParams {
  id: number;
  oldpassword: string;
  newpassword: string;
}

export interface ChangePasswordResponse {
  token: string;
}