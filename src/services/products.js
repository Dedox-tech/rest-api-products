/* eslint-disable no-console */
const connection = require("../db/connection/mongoDBConnection");
const models = require("../db/models/productsModel");

connection.mongoDBConnection();
const ProductModel = models.ProductsModel;

async function getProducts() {
    const productList = await ProductModel.find();
    return productList;
}

async function getProductById(id) {
    const specificProduct = await ProductModel.findById(id);
    if (!specificProduct) {
        // Update for throw an error
        console.log("The product was not found");
    }
    return specificProduct;
}

async function getProductByName(name) {
    const specificProduct = await ProductModel.find({ name });
    if (!specificProduct) {
        console.log("There were not product with this name");
    }
    return specificProduct;
}

async function saveNewProduct(product) {
    try {
        const newProduct = new ProductModel(product);
        await newProduct.save();
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = {
    getProducts,
    getProductById,
    getProductByName,
    saveNewProduct,
};
