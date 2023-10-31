import mongoose, { Model, Schema } from 'mongoose';
import { IUser } from '../interfaces/user.interfaces';

const UserSchema: Schema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  imageurl: { type: String},
  role: { type: String, required: true, default: 'USER' },
});

const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);

export default User;