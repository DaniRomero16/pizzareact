userModel = require('../models/usersModel');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

var controller = {
    registerUser: function (req, res) {
        let password = req.body.password;
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, null, function (err, hash) {
                password = hash;
                usuario = new userModel();
                usuario.username = req.body.username;
                usuario.email = req.body.email;
                usuario.password = password;
                usuario.save((err, result) => {
                    if (err) {
                        console.log(err);
                        return res.send(err);
                    }
                    else {
                        let user = {
                            id: result._id,
                            username: req.body.username,
                            email: req.body.email
                        };
                        jwt.sign({user}, 'telepizza', { expiresIn: '2h' }, (err,token) => {
                            return res.json({
                                token
                            })
                        })
                    }
                })
            });
        })
    },
    loginUser: function (req, res) {
        userModel.findOne({ username: req.body.username }, function (err, result) {
            
            if (err) {
                return res.send(err);
            }
            else {
                if (result == "") {
                    return res.send('User introducido no válido');
                } else {
                    bcrypt.compare(req.body.password, result.password, function (err, iguales) {
                        if (err) {
                            return res.send(err)
                        } else {
                            if (iguales) {
                                jwt.sign({user}, 'telepizza', { expiresIn: '2h' }, (err,token) => {
                                    return res.json({
                                        token
                                    })
                                })
                            } else {
                                return res.send('La contraseña no es correcta')
                            };
                        };
                    });
                };
            };
        });
    },
    logoutUser: function (req, res) {
        
    }
};

module.exports = controller;