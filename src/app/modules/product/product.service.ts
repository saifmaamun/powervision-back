import { error } from "console";
import { IProduct } from "./product.interface";
import { Product } from "./product.model";

import { SortOrder } from "mongoose";
// import { paginationHelpers } from "../../../helper/paginationHelpers";

// add new product
const addProductToDBS = async (product: IProduct): Promise<IProduct> => {
  const addedProduct = await Product.create(product);
  if (!addedProduct) {
    throw new Error();
  }
  return addedProduct;
};

// get all products
// const getAllProductsFromDBS = async (
//   filters: IProductFilters,
//   paginationOptions: IPaginationOptions
// ): Promise<IGenericResponse<IProduct[]>> => {
//   const { ...filtersData } = filters;
//   const { page, limit, skip, sortBy, sortOrder } =
//     paginationHelpers.calculatePagination(paginationOptions);
//   const andConditions = [];

//   if (Object.keys(filtersData).length) {
//     andConditions.push({
//       $and: Object.entries(filtersData).map(([field, value]) => ({
//         [field]: value,
//       })),
//     });
//   }

//   const sortConditions: { [key: string]: SortOrder } = {};

//   if (sortBy && sortOrder) {
//     sortConditions[sortBy] = sortOrder;
//   }
//   const whereConditions =
//     andConditions.length > 0 ? { $and: andConditions } : {};

//   const result = await Product.find(whereConditions)
//     .sort(sortConditions)
//     .skip(skip)
//     .limit(limit);
//   const total = await Product.countDocuments(whereConditions);
//   return {
//     meta: {
//       page,
//       limit,
//       total,
//     },
//     data: result,
//   };
// };
const getAllProductsFromDBS = async (): Promise<IProduct[]> => {
  const products = await Product.find();
  return products;
};
// get single product bu ID
const getSingleProductByIdFromDBS = async (
  id: string
): Promise<IProduct | null> => {
  const query = { _id: id };
  const product = await Product.findOne(query);
  if (!product) {
    throw new Error();
  }
  return product;
};

// update Product
const updateProductS = async (id: string, payload: Partial<IProduct>) => {
  const query = { _id: id };
  const isExist = await Product.findOne(query);
  if (!isExist) {
    throw new Error();
  }
  const { ...productData } = payload;
  const updatedProduct = { ...productData };
  const result = await Product.findOneAndUpdate(query, updatedProduct, {
    new: true,
  });
  return result;
};

// delete Product
const deleteProductS = async (id: string): Promise<IProduct | null> => {
  const query = { _id: id };
  const result = await Product.findByIdAndDelete(query);
  return result;
};

export const ProductService = {
  addProductToDBS,
  getAllProductsFromDBS,
  getSingleProductByIdFromDBS,
  deleteProductS,
  updateProductS,
};
