var app = require("./app");
var UsersController = require("./controllers/userController");
var PizzasController = require("./controllers/pizzaController");
var PedidosController = require("./controllers/pedidosController");

app.post("/users/register", UsersController.registerUser);
app.post("/users/login", UsersController.loginUser);

app.get("/carta", verifyToken, PizzasController.getPizzas);
app.post("/pedido", PedidosController.addPedido);

//token format
//authorization: bearer <access_token>

// verify token

function verifyToken(req, res, next) {
  console.log(req.headers);
  //get auth header value
  const bearerHeader = req.headers["authorization"];
  //check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    //split at the space
    const bearer = bearerHeader.split(' ');
    // get token from array
    const bearerToken = bearer[1];
    //set the token
    req.token = bearerToken;
    //next
    next();
  } else {
    //forbidden
    res.sendStatus(403);
  }
}

module.exports = app;
