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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const product_model_1 = require("./product.model");
const paginationHelpers_1 = require("../../../helper/paginationHelpers");
// add new product
const addProductToDBS = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const addedProduct = yield product_model_1.Product.create(product);
    if (!addedProduct) {
        throw new Error();
    }
    return addedProduct;
});
// get all products
const getAllProductsFromDBS = (filters, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const filtersData = __rest(filters, []);
    const { page, limit, skip, sortBy, sortOrder } = paginationHelpers_1.paginationHelpers.calculatePagination(paginationOptions);
    const andConditions = [];
    if (Object.keys(filtersData).length) {
        andConditions.push({
            $and: Object.entries(filtersData).map(([field, value]) => ({
                [field]: value,
            })),
        });
    }
    const sortConditions = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    const whereConditions = andConditions.length > 0 ? { $and: andConditions } : {};
    const result = yield product_model_1.Product.find(whereConditions)
        .sort(sortConditions)
        .skip(skip)
        .limit(limit);
    const total = yield product_model_1.Product.countDocuments(whereConditions);
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
// const getAllProductsFromDBS = async (): Promise<IProduct[]> => {
//   const products = await Product.find();
//   return products;
// };
// get single product bu ID
const getSingleProductByIdFromDBS = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: id };
    const product = yield product_model_1.Product.findOne(query);
    if (!product) {
        throw new Error();
    }
    return product;
});
// update Product
const updateProductS = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: id };
    const isExist = yield product_model_1.Product.findOne(query);
    if (!isExist) {
        throw new Error();
    }
    const productData = __rest(payload, []);
    const updatedProduct = Object.assign({}, productData);
    const result = yield product_model_1.Product.findOneAndUpdate(query, updatedProduct, {
        new: true,
    });
    return result;
});
// delete Product
const deleteProductS = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: id };
    const result = yield product_model_1.Product.findByIdAndDelete(query);
    return result;
});
exports.ProductService = {
    addProductToDBS,
    getAllProductsFromDBS,
    getSingleProductByIdFromDBS,
    deleteProductS,
    updateProductS,
};
