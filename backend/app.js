var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
const PORT = 3001;
var app = express();

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
//------------

//sesiones
app.use(session({
    secret:'cadena aleatoria',
    resave:true,
    saveUninitialized:true,
    cookie: {
        maxAge: 2 * 24 * 60 * 60 * 1000
    }
}));
//-------------
//creacion del servidor
app.listen(PORT, () =>{
    console.log('Servidor corriendo correctamente');
});

module.exports = app;