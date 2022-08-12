const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const es6Renderer = require("express-es6-template-engine");
const { Keys } = require("./sequelize/models");

// MiddleWare
app.use(express.json());

// Template Engine
app.use("/public", express.static("public"));
app.engine("html", es6Renderer);
app.set("views", "./public/views");
app.set("view engine", "html");

// Pages renders
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/allParks", (req, res) => {
  res.render("allParks");
});
app.get("/favoriteParks", (req, res) => {
  res.render("fav");
});
app.get("/randomParks", (req, res) => {
  res.render("random");
});

// Route to get keys
app.post("/get_parks_key", async (req, res) => {
  const getParksKey = await Keys.findOne({
    where: {
      name: "NPS API Key",
    },
  });
  console.log(getParksKey);
  res.json(getParksKey);
});

app.post("/get_weather_key", async (req, res) => {
  const getWeatherKey = await Keys.findOne({
    where: {
      name: "Open Weather API Key",
    },
  });
  res.json(getWeatherKey);
});

app.listen(PORT, console.log(`Running on Port ${PORT}`));
