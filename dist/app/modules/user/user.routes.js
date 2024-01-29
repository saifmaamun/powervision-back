"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const user_controller_1 = require("./user.controller");
router.post("/signup", user_controller_1.UserController.createUserC);
router.post("/login", user_controller_1.UserController.loginUserC);
router.get("/", user_controller_1.UserController.getAllUSersC);
exports.default = router;
