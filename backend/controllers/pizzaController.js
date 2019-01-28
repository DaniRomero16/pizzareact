pizzaModel = require('../models/pizzaModel');
var jwt = require("jsonwebtoken");

var controller = {
    getPizzas: function (req, res) {
        jwt.verify(req.token, 'telepizza', (err, authData) => {
            if(err) {
                res.sendStatus(403);
            } else {
                pizzaModel.find({},function (err, result) {
                    if (err) {
                        return res.send(err);
                    }
                    else {
                        if (result == "") {
                            return res.send('Algo ha ido mal.');
                        } else {
                            return res.json({
                                authData,
                                result
                            });
                        };
                    };
                });
            }
        })
        
    }
};

module.exports = controller;