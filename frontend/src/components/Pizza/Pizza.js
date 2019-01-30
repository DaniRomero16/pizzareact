import React, { Component } from 'react'

export class Pizza extends Component {
  
  render() {
    return (
        <div className="card" style={{width: '21.5rem', backgroundColor: '#e8e9ea'}}>
        <img src={this.props.pizza.imagen} className="card-img-top img-fluid" alt="..."/>
        <div className="card-body">
          <h3 className="card-title">{this.props.pizza.nombre}</h3>
          <p className="card-text">{this.props.pizza.descripcion}</p>
          <button onClick={()=>{
            let toPush = {
              nombre: this.props.pizza.nombre,
              precio: this.props.pizza.precioMediana,
              tamanio: 'Mediana'
            };
            this.props.click(toPush);
          }}
          className="btn btn-primary m-1">Mediana: {this.props.pizza.precioMediana} €</button>
          <button onClick={()=>{
            let toPush = {
              nombre: this.props.pizza.nombre,
              precio: this.props.pizza.precioFamiliar,
              tamanio: 'Familiar'
            };
            this.props.click(toPush);
          }} className="btn btn-primary m-1">Familiar: {this.props.pizza.precioFamiliar} €</button>
        </div>
      </div>
    )
  }
}

export default Pizza
