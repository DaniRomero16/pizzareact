userModel = require('../models/usersModel');
var bcrypt = require('bcrypt-nodejs');

var controller = {
    registerUser: function (req, res) {
        let password = req.body.password;
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, null, function (err, hash) {
                password = hash;
                usuario = new userModel();
                usuario.nombre = req.body.name;
                usuario.email = req.body.email;
                usuario.password = password;
                usuario.save((err, result) => {
                    if (err) {
                        console.log(err);
                        return res.send(err);
                    }
                    else {
                        req.session.user = {
                            'user': req.body.name,
                            'email': req.body.email
                        };
                        let user = {
                            id: result._id,
                            nombre: req.body.name,
                            email: req.body.email
                        };
                        return res.send(user);
                    }
                })
            });
        })
    },
    loginUser: function (req, res) {
        userModel.findOne({ email: req.body.email }, function (err, result) {
            if (err) {
                return res.send(err);
            }
            else {
                if (result == "") {
                    return res.send('Email introducido no válido');
                } else {
                    bcrypt.compare(req.body.password, result.password, function (err, iguales) {
                        if (err) {
                            return res.send(err)
                        } else {
                            if (iguales) {
                                req.session.user = {
                                    'user': result.nombre,
                                    'email': result.email
                                };
                                return res.send(result);
                            } else {
                                return res.send('La contraseña no es correcta')
                            };
                        };
                    });
                };
            };
        });
        console.log(req.session);
    },
    logoutUser: function (req, res) {
        if (req.session.user) {
            req.session.destroy();
        } else {
            return res.send('No existe un login de usuario')
        }
    }
};

module.exports = controller;