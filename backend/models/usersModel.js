var mongoose = require('../db');
var Schema = mongoose.Schema;

var usuarioSchema = Schema({
    username: String,
    password: String,
    email: String
})
module.exports = mongoose.model('usuarios', usuarioSchema);