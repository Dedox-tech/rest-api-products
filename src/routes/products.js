const express = require("express");

const router = express.Router();

// Return all the products
router.get("/all", async (req, res) => {
    res.send("The request was: /all");
});

// We can access the /:id as req.parms.id
router.get("/detail/:id", async (req, res) => {
    res.send("The request was asking for the id");
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
