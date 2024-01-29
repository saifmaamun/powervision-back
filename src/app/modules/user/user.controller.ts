import { Request, Response } from "express";
import { UserService } from "./user.service";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { IUser } from "./user.interface";

// create User
const createUserC = catchAsync(async (req: Request, res: Response) => {
  const user = req.body;
  const result = await UserService.createUserS(user);
  sendResponse<IUser>(res, {
    statusCode: 200,
    success: true,
    message: "user created successfully",
    data: result,
  });
});
const loginUserC = catchAsync(async (req: Request, res: Response) => {
  const user = req.body;
  const result = await UserService.loginUserS(user);
  sendResponse<IUser>(res, {
    statusCode: 200,
    success: true,
    message: "user logged in successfully",
    data: result,
  });
});

const getAllUSersC = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getAllUSersS();
  sendResponse<IUser[]>(res, {
    statusCode: 200,
    success: true,
    message: "All Users Retrived",
    data: result,
  });
});

export const UserController = {
  createUserC,
  loginUserC,
  getAllUSersC,
};
