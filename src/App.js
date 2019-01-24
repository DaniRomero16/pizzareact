import React, { Component } from "react";
import "./App.css";
import Pizza from "./components/Pizza/Pizza";
import Carrito from "./components/Carrito/Carrito";
import PizzaMitades from "./components/PizzaMitades/PizzaMitades";
import PizzaPerso from "./components/PizzaPerso/PizzaPerso";
import axios from 'axios';

class App extends Component {
  state = {
    pedido: [],
    carrito: false,
    carta: []
  };
  anadirPizza = this.anadirPizza.bind(this);
  enviarPedido = this.enviarPedido.bind(this);
  pizzas = [];

  componentDidMount(){
    axios.get('http://localhost:3001/carta')
    .then(response => {
        console.log(response);
        this.setState({ carta: response.data });
    })
  }

  anadirPizza(pizza) {
    let array = this.state.pedido;
    array.push(pizza);
    this.setState({ pedido: array });
  }

  enviarPedido(e) {
    axios.post('http://localhost:3001/pedido',e)
    .then(response => {
        console.log(response);
    })
  }

  render() {
    return (
      <div className="App">
        <nav
          className="navbar navbar-light"
          style={{ backgroundColor: "#e8e9ea" }}
        >
          <a className="navbar-brand" href="/home">
            <img
              src="https://vignette.wikia.nocookie.net/logosfake/images/4/47/Telepizza_2003.png/revision/latest?cb=20140201173556"
              width="250"
              height="auto"
              className="d-inline-block align-self-center mr-3"
              alt=""
            />
            Realice su pedido
          </a>
          <div className="btn-group">
            <button
              onClick={() => this.setState({ carrito: !this.state.carrito })}
              className="btn btn-danger dropdown-toggle"
            >
              Ver Pedido Actual
              <span className="mx-2 badge badge-light">
                {this.state.pedido.length}
              </span>
            </button>
          </div>
        </nav>

        <div className="row">
          <div className="col-8">
            <div className="container-fluid mt-2">
              <img
              className="img-fluid rounded mx-auto d-block"
                src="https://images.telepizza.com/vol/es/images/content/productos/quadroller_pc.jpg"
                alt="..."
              />
            </div>
            <div className="container">
              <div className="row">
                {this.state.carta.map(e => {
                  return (
                    <div className="col mt-4">
                      <Pizza pizza={e} click={this.anadirPizza} />
                    </div>
                  );
                })}
                <div className="col mt-4">
                  <PizzaMitades pizzas={this.state.carta} click={this.anadirPizza} />
                </div>
                <div className="col mt-4">
                  <PizzaPerso click={this.anadirPizza} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 mt-5 carro">
            <Carrito mostrar={this.state.carrito} pedido={this.state.pedido} pedir={this.enviarPedido} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
