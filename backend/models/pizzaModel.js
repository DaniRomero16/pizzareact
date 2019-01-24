var mongoose = require('../db');
var Schema = mongoose.Schema;

var pizzaSchema = Schema({
    nombre: String,
    precioMediana: Number,
    precioFamiliar: Number,
    imagen: String,
    descripcion: String
})
module.exports = mongoose.model('pizzas', pizzaSchema);