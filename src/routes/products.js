/* eslint-disable no-console */
const express = require("express");

const router = express.Router();

const services = require("../services/products");

// Return all the products
router.get("/all", async (req, res) => {
    try {
        const productList = await services.getProducts();
        console.log(productList);
        res.send(productList);
    } catch (error) {
        console.log(error);
    }
});

// We can access the /:id as req.params.id
router.get("/details/:id", async (req, res) => {
    try {
        const specificProduct = await services.getProductById(req.params.id);
        console.log(specificProduct);
        res.send(specificProduct);
    } catch (error) {
        console.log(error);
    }
});

// Return the data about the name provided in the query object
router.get("/", async (req, res) => {
    try {
        const specificProduct = await services.getProductByName(req.query.name);
        console.log(specificProduct);
        res.send(specificProduct);
    } catch (error) {
        console.log(error);
    }
});

// Post the data provided in the body object
router.post("/", async (req, res) => {
    const newProduct = await services.saveNewProduct(req.body);
    if (!newProduct) {
        res.send("An error ocurred saving the product in the database");
    }
    res.send("The product was saved successfully");
});

// Put request modify the entire object
router.put("/:id", async (req, res) => {
    try {
        const updatedProduct = await services.updateProduct(
            req.params.id,
            req.body
        );
        console.log(updatedProduct);
        res.send("The product was updated");
    } catch (error) {
        console.log(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deletedProduct = await services.deleteProduct(req.params.id);
        console.log(deletedProduct);
        res.send("The product was deleted");
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
