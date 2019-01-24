import React, { Component } from "react";

export class Carrito extends Component {
  state = {
    mostrar: this.props.mostrar,
    pizzas: [],
    total: 0
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ mostrar: nextProps.mostrar, pizzas: nextProps.pedido });
  }

  render() {
    if (this.state.mostrar) {
      var precio = 0;
      return (
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Pizza</th>
                <th scope="col">Tamaño</th>
                <th scope="col">Precio</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {this.state.pizzas.map((e, index) => {
                precio = precio + e.precio;
                return (
                  <tr>
                    <th scope="row">{index}</th>
                    <td>{e.nombre}</td>
                    <td>{e.tamanio}</td>
                    <td>{e.precio} €</td>
                    <td><button
                      className='btn-danger btn'
                      onClick={()=>{this.state.pizzas.splice(index,1);
                        this.setState(()=>{return {pizzas: this.state.pizzas}})
                      }}
                    >
                    X
                    </button></td>
                  </tr>
                );
              })}
              <tr>
                <th colspan="3" scope="row">
                  TOTAL
                </th>
                <td colSpan='2'>{precio}€</td>
              </tr>
              <tr>
                <th colspan="5" scope="row">
                  <button onClick={() => {
                    let e = {
                      array : this.state.pizzas,
                      total: precio
                    }
                    this.props.pedir(e)
                    }} className="btn btn-danger ml-4">
                    Completar Pedido
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default Carrito;
