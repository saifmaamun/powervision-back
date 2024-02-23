"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const product_service_1 = require("./product.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const addProductToDBC = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = req.body;
    const result = yield product_service_1.ProductService.addProductToDBS(product);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Product added successfully",
        data: result,
    });
}));
const getProductsFromDBC = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_service_1.ProductService.getAllProductsFromDBS();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "All Product received",
        data: result,
    });
}));
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
const getSingleProductByIdFromDBC = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield product_service_1.ProductService.getSingleProductByIdFromDBS(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Product received successfully",
        data: result,
    });
}));
// update single Product
const updateProductC = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedProduct = req.body;
    const result = yield product_service_1.ProductService.updateProductS(id, updatedProduct);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Product updated successfully",
        data: result,
    });
}));
// delete Product
const deleteProductC = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield product_service_1.ProductService.deleteProductS(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Product deleted successfully",
        data: result,
    });
}));
exports.ProductController = {
    addProductToDBC,
    getProductsFromDBC,
    getSingleProductByIdFromDBC,
    updateProductC,
    deleteProductC,
};
