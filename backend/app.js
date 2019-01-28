var express = require('express');
var bodyParser = require('body-parser');
const PORT = 3001;
var app = express();


//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
  });
//------------

//creacion del servidor
app.listen(PORT, () =>{
    console.log('Servidor corriendo correctamente');
});

module.exports = app;