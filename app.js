// Module dependencies

const ejs = require("ejs");
const fetch = require("node-fetch");
const express = require("express");
const path = require("path");
const app = express();

// Config

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Middleware 

app.use("/public", express.static("public"));


// Routes

// Homepage
app.get("/", (req, res) => {
    res.render("index");
})

// Team scoreboards
app.get("/teams/:tname", (req, res) => {
    var tname = req.params.tname;

    const teamID = {
        Hawks: 1,
        Celtics: 2,
        Nets: 3,
        Hornets: 4,
        Bulls: 5,
        Cavs: 6,
        Mavs: 7,
        Nuggets: 8,
        Detroit: 9,
        Warriors: 10,
        Rockets: 11,
        Pacers: 12,
        Clippers: 13,
        Lakers: 14,
        Grizzlies: 15,
        Heat: 16,
        Bucks: 17,
        Timberwolves: 18,
        Pelicans: 19,
        Knicks: 20,
        OKC: 21,
        Magic: 22,
        Philly: 23,
        Suns: 24,
        Trailblazers: 25, 
        Kings: 26,
        Spurs: 27,
        Raptors: 28,
        Jazz: 29,
        Wizards: 30
    };

    var tid = teamID[tname];

    fetch(`https://www.balldontlie.io/api/v1/games/?seasons[]=2018&team_ids[]=${tid}&per_page=82`)
    .then(res => res.json())
    .then(json => res.render("teams", {teamn: tname, games: json.data}))

})


// Server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));