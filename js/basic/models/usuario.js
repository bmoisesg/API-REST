var express = require("express");
const usuarios = express.Router();

usuarios.get("/", function (req, res) {
  res.json({ mensaje: "hola mundo!!! c:" });
});

usuarios.get("/saludo", function (req, res) {
  res.send("mensaje: " + "Que tengas un buen dia :)");
});

usuarios.get("/saludo/:nombre", function (req, res) {
  let nombre = req.params.nombre;
  res.status(202).send("mensaje: " + "Que tengas un buen dia " + nombre);
});

usuarios.post("/saludo", function (req, res) {
  let nombre = req.body.nombre;
  res.json({ mensaje: "hola " + nombre + "! c:" });
});

module.exports = usuarios;
