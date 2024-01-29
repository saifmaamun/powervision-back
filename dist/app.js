"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./app/modules/user/user.routes"));
const product_routes_1 = __importDefault(require("./app/modules/product/product.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Hello World!");
});
// users routes
app.use("/api/v1/users", user_routes_1.default);
// products routes
app.use("/api/v1/products", product_routes_1.default);
exports.default = app;
