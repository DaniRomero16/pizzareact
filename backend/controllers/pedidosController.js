pedidosModel = require('../models/pedidosModel');

var controller = {
    addPedido: function (req, res) {
        pedido = new pedidosModel();
        pedido.pedido = req.body.array;
        pedido.total = req.body.total;
        pedido.save((err, result) => {
            if (err) {
                console.log(err);
                return res.send(err);
            }
            else {
                return res.send(result);
            }
        })
    }
};

module.exports = controller;