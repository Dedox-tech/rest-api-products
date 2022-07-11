/* eslint-disable no-console */
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello world I am good what about you");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
