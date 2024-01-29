import express from "express";
import cors from "cors";
import usersRouter from "./app/modules/user/user.routes";
import productRouter from "./app/modules/product/product.routes";
const app = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// users routes
app.use("/api/v1/users", usersRouter);
// products routes
app.use("/api/v1/products", productRouter);

export default app;
