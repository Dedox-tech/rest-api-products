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
    res.send(req.query.name);
});

// Post the data provided in the body object
router.post("/", async (req, res) => {
    res.send(req.body);
});

// Put request modify the entire object
router.put("/:id", async (req, res) => {
    res.send("Put request");
});

// Patch request modify just a small part of the object
router.patch("/:id", async (req, res) => {
    res.send("Patch request");
});

router.delete("/:id", async (req, res) => {
    res.send("Delete request");
});

module.exports = router;
