var express = require("express");
var morgan = require("morgan");
var cors = require("cors");

var app = express();
var corsOptions = { origin: true, optionsSuccessStatus: 200 };

app.use(morgan("dev"));
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

var port = 8080;

app.listen(port, function () {
  console.log("app listening on port ", port, "!");
});

const usuarios = require("./models/usuario");
const paises = require("./models/pais");

// Endpoints ----------------------------------------

app.use('/usuario', usuarios);
app.use('/pais', paises);
