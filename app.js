var express = require('express');
var morgan = require('morgan');
var app = express();

var variable;

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/**
 * [GET] localhost:8080/
 */

app.get('/', function (req, res) {
  res.json({ mensaje: variable });
  //res.send('texto:'+ variable);
});

/**
 * [POST] localhost:8080/
 * Descripcion: entra un json y guarda el valor en una variable
*/
app.post('/', function (req, res) {
  variable = req.body.texto
  res.json({ mensaje: "exito" })
});

app.listen(8080, function () {
  console.log('app listening on port 8080!');
});
