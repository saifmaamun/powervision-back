import express from "express";
import { ProductController } from "./product.controller";
const router = express.Router();

router.get("/:id", ProductController.getSingleProductByIdFromDBC);
router.delete("/:id", ProductController.deleteProductC);
router.patch("/:id", ProductController.updateProductC);
router.get("/", ProductController.getProductsFromDBC);
router.post("/", ProductController.addProductToDBC);
export default router;
