var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(8080, function () {
  console.log('app listening on port 8080!');
});

// Endpoints ----------------------------------------

app.get('/', function (req, res) {
  res.json({ mensaje: "hola mundo" });
});

app.get('/saludo', function (req, res) {
  res.send('mensaje: '+ "Que tengas un buen dia");
});

app.post('/saludo', function (req, res) {
  let nombre = req.body.nombre
  res.json({ mensaje: "hola "+ nombre+"! c:" })
});