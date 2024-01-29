import { Schema, model } from "mongoose";
import { IProduct, ProductModel } from "./product.interface";

export const ProductSchema = new Schema<IProduct, ProductModel>({
  id: {
    type: String,
  },
  ownerEmail: {
    type: String,
  },
  buyerName: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  frameMaterial: {
    type: String,
    required: true,
  },
  frameShape: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  saleDate: {
    type: String,
  },
  lens: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  lenseColor: {
    type: String,
    required: true,
  },
  frameColor: {
    type: String,
    required: true,
  },
  bridgeSize: {
    type: Number,
    required: true,
  },
  border: {
    type: Boolean,
    required: true,
  },
  descriptions: {
    type: String,
    required: true,
  },
});

export const Product = model<IProduct, ProductModel>("Product", ProductSchema);
