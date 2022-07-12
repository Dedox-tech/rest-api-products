/* eslint-disable no-console */
const connection = require("../db/connection/mongoDBConnection");
const models = require("../db/models/productsModel");

connection.mongoDBConnection();
const productModel = models.productsModel;

async function getProducts() {
    const productList = await productModel.find();
    return productList;
}

async function getProductById(id) {
    const specificProduct = await productModel.findById(id);
    if (!specificProduct) {
        // Update for throw an error
        console.log("The product was not found");
    }
    return specificProduct;
}

module.exports = { getProducts, getProductById };
