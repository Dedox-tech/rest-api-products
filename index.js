/* eslint-disable no-console */
const express = require("express");

const productRouter = require("./src/routes/products");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/products", productRouter);

app.get("/", (req, res) => {
    res.send("Hello world I am good what about you");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
