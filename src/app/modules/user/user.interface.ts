import { Model } from "mongoose";

// user interface
export type IUser = {
  id?: string;
  email: string;
  password: string;
};
export type UserModel = Model<IUser, Record<string, unknown>>;
