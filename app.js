var express = require('express');   
var app = express();
var variable='null';                            //aqui se almacena el texto recibido del post


app.use(express.json())                         // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get('/', function (req, res) {
  
  res.json({texto: variable});                 // otra forma de responder: res.send('texto:'+ variable);
  console.log('haciendo un [GET]');
});

                                                /* otra forma de hacer un post sin json
                                                app.post('/:user', function (req, res) {

                                                  variable= req.params.user;
                                                  res.send('guardado... c:');
                                                  console.log('haciendo un [POST]');
                                                });*/


app.post('/', function(req, res){
  variable= req.body.texto                      //setea el valor que recibe a "variable"
  res.send('guardado... C:');
  console.log('haciendo un [POST]->'+ variable);
  
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
