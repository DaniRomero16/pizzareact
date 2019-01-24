var mongoose = require('../db');
var Schema = mongoose.Schema;

var usuarioSchema = Schema({
    nombre: String,
    password: String,
    email: String
})
module.exports = mongoose.model('usuario', usuarioSchema);