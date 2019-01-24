var mongoose = require('../db');
var Schema = mongoose.Schema;

var pedidoSchema = Schema({
    pedido:JSON,
    total: Number
})
module.exports = mongoose.model('pedidos', pedidoSchema);