var app = require('./app');
var UsersController = require('./controllers/userController');
var PizzasController = require('./controllers/pizzaController');
var PedidosController = require('./controllers/pedidosController');
var auth = function (req, res, next) {
    if (req.session.user)
        return next();
    else
        return res.render('log');
};

app.get('/', auth, function (req, res) {
    res.render('index', {
        rol: req.session.user.rol,
        name: req.session.user.user
    });
});

app.post('/users/register', UsersController.registerUser);
app.get('/users/login', UsersController.loginUser);

app.get('/carta', PizzasController.getPizzas);
app.post('/pedido', PedidosController.addPedido);

module.exports = app;