"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.ProductSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ProductSchema = new mongoose_1.Schema({
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
exports.Product = (0, mongoose_1.model)("Product", exports.ProductSchema);
