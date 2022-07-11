/* eslint-disable no-console */
const mongoose = require("mongoose");

async function mongoDBConnection() {
    try {
        await mongoose.connect(
            "mongodb+srv://Dedox-tech:Contraseña123@cluster0.eo89j.mongodb.net/products-database?retryWrites=true&w=majority"
        );
        console.log("The connection to the database was successful");
    } catch (error) {
        console.log(error);
    }
}

module.exports = { mongoDBConnection };
