var express = require("express");
const paises = express.Router();

paises.get("/", function (req, res) {
  res.json({ mensaje: "guatemala" });
});

module.exports = paises;
