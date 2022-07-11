/* eslint-disable no-console */
const mongoose = require("mongoose");
require("dotenv").config();

async function mongoDBConnection() {
    try {
        await mongoose.connect(process.env.CONNECTION_URL);
        console.log("The connection to the database was successful");
    } catch (error) {
        console.log(error);
    }
}

module.exports = { mongoDBConnection };
