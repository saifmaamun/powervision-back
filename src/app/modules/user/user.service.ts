import config from "../../../config/config";
import { IUser } from "./user.interface";
import { User } from "./user.model";

// create new user
const createUserS = async (user: IUser): Promise<IUser | null> => {
  const createdUser = await User.create(user);
  if (!createdUser) {
    throw new Error(" user creation failed");
  }
  console.log("user created", createdUser);
  return createdUser;
};
const loginUserS = async (user: IUser): Promise<IUser> => {
  const loggedUser = await User.findOne({ email: user.email });
  console.log(loggedUser);
  if (!loggedUser) {
    throw new Error("User not found");
  } else if (loggedUser.password !== user.password) {
    throw new Error("Invlid Password");
  } else {
  }
  return loggedUser;
};
const getAllUSersS = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const UserService = {
  createUserS,
  loginUserS,
  getAllUSersS,
};
