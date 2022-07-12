const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
    name: { type: String, required: true, minLength: 3, maxLength: 20 },
    price: { type: Number, required: true, min: 10000 },
    currency: { type: String, required: true, enum: ["COP", "USD"] },
    description: { type: String, required: false, maxLength: 20 },
});

const ProductsModel = mongoose.model("products-information", productsSchema);

module.exports = { ProductsModel };
