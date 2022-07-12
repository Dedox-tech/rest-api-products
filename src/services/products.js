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

async function getProductByName(name) {
    const specificProduct = await productModel.find({ name });
    if (!specificProduct) {
        console.log("There were not product with this name");
    }
    return specificProduct;
}

module.exports = { getProducts, getProductById, getProductByName };
