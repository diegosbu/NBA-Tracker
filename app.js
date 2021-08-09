// Module dependencies

const ejs = require("ejs");
const express = require("express");
const path = require("path");
const app = express();

// Config

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Middleware 

app.use("/public", express.static("public"));

// Routes

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/teams/:tname", (req, res) => {
    var tname = req.params.tname;
    res.render("teams", {teamn: tname});
})

// Server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));