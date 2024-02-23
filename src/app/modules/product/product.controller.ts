import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { ProductService } from "./product.service";
import sendResponse from "../../../shared/sendResponse";
import { IProduct } from "./product.interface";
import pick from "../../../shared/pick";

const addProductToDBC = catchAsync(async (req: Request, res: Response) => {
  const product = req.body;
  const result = await ProductService.addProductToDBS(product);
  sendResponse<IProduct>(res, {
    statusCode: 200,
    success: true,
    message: "Product added successfully",
    data: result,
  });
});

const getProductsFromDBC = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.getAllProductsFromDBS();
  sendResponse<IProduct[]>(res, {
    statusCode: 200,
    success: true,
    message: "All Product received",
    data: result,
  });
});
// const getProductsFromDBC = catchAsync(async (req: Request, res: Response) => {
//   const filters = pick(req.query, productFilterableFields);
//   console.log(req.query, filters);
//   const paginationOptions = pick(req.query, paginationFields);
//   const result = await ProductService.getAllProductsFromDBS(
//     filters,
//     paginationOptions
//   );
//   sendResponse<IProduct[]>(res, {
//     statusCode: 200,
//     success: true,
//     message: "All Product received",
//     meta: result.meta,
//     data: result.data,
//   });
// });
const getSingleProductByIdFromDBC = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await ProductService.getSingleProductByIdFromDBS(id);
    sendResponse<IProduct>(res, {
      statusCode: 200,
      success: true,
      message: "Product received successfully",
      data: result,
    });
  }
);

// update single Product
const updateProductC = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedProduct = req.body;
  const result = await ProductService.updateProductS(id, updatedProduct);
  sendResponse<IProduct>(res, {
    statusCode: 200,
    success: true,
    message: "Product updated successfully",
    data: result,
  });
});

// delete Product
const deleteProductC = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await ProductService.deleteProductS(id);
  sendResponse<IProduct>(res, {
    statusCode: 200,
    success: true,
    message: "Product deleted successfully",
    data: result,
  });
});

export const ProductController = {
  addProductToDBC,
  getProductsFromDBC,
  getSingleProductByIdFromDBC,
  updateProductC,
  deleteProductC,
};
