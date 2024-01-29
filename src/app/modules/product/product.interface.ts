import { Model } from "mongoose";

// product interface
export type IProduct = {
  id?: string;
  ownerEmail?: string;
  buyerName?: string;
  name: string;
  brand: string;
  frameMaterial: string;
  frameShape: string;
  quantity: number;
  saleDate?: string;
  imageUrl: string;
  lens: string;
  price: number;
  gender: string;
  lenseColor: string;
  frameColor: string;
  bridgeSize: number;
  border: boolean;
  descriptions: string;
};

export type ProductModel = Model<IProduct, Record<string, unknown>>;

// filtering options
export type IProductFilters = {
  searchTerm?: string;
  material?: string;
  shape?: string;
  lens?: string;
  brand?: string;
  price?: number;
  gender?: string;
  lenseColor?: string;
  frameColor?: string;
};
// filterable fields
export const productFilterableFields = [
  "material",
  "shape",
  "lens",
  "brand",
  "price",
  "gender",
  "lenseColor",
  "frameColor",
];
export const paginationFields = ["page", "limit", "sortBy", "sortOrder"];

// Filter by Frame Material: Allow users to set a filter for specific frame materials (e.g., metal, plastic, acetate).
// Filter by Frame Shape: Implement a real-time search functionality for frame shapes to quickly find eyeglasses with specific shapes (e.g., rectangular, round, cat-eye).
// Filter by Lens Type: Enable searching by lens types (e.g., single-vision, bifocal, progressive).
// Filter by Brand: Implement a filter for eyeglasses brands to quickly find items by a specific manufacturer.
// Filter by Price Range: Implement a price range filter for eyeglasses.
// Filter by Gender: Allow users to filter eyeglasses based on gender (e.g., men, women, unisex).
// Filter by Color: Include a filter for eyeglasses colors.
