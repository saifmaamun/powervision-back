import express from "express";
const router = express.Router();
import { UserController } from "./user.controller";

router.post("/signup", UserController.createUserC);
router.post("/login", UserController.loginUserC);
router.get("/", UserController.getAllUSersC);
export default router;
