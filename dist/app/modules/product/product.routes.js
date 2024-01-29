"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.get("/:id", product_controller_1.ProductController.getSingleProductByIdFromDBC);
router.delete("/:id", product_controller_1.ProductController.deleteProductC);
router.patch("/:id", product_controller_1.ProductController.updateProductC);
router.get("/", product_controller_1.ProductController.getProductsFromDBC);
router.post("/", product_controller_1.ProductController.addProductToDBC);
exports.default = router;
