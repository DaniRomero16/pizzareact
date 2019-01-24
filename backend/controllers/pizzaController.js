pizzaModel = require('../models/pizzaModel');

var controller = {
    getPizzas: function (req, res) {
        pizzaModel.find({},function (err, result) {
            if (err) {
                return res.send(err);
            }
            else {
                if (result == "") {
                    return res.send('Algo ha ido mal.');
                } else {
                    return res.send(result);
                };
            };
        });
    }
};

module.exports = controller;