const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    currency: String,
    description: String,
});

const productsModel = mongoose.model("products-information", productsSchema);

module.exports = { productsModel };
