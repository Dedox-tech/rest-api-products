/* eslint-disable no-console */
const express = require("express");

const productRouter = require("./src/routes/products");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/products", productRouter);

app.get("/", (req, res) => {
    res.send("Simple REST API for a group of products");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
