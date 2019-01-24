import React, { Component } from "react";

export class PizzaMitades extends Component {
  render() {
    return (
      <div
        className="card"
        style={{ width: "21.5rem", backgroundColor: "#e8e9ea" }}
      >
        <img
          src="//www.dominospizza.es/images/Pizza por mitades.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h3 className="card-title">Elige por mitades</h3>
          <form>
          <label for="mitad1">Mitad 1:</label>
            <select className="form-control" id="mitad1">
            {this.props.pizzas.map((e)=>{
                return <option value={e._id}>{e.nombre}</option>
            })}
            </select>
            <label for="mitad2">Mitad 2:</label>
            <select className="form-control" id="mitad2">
            {this.props.pizzas.map((e)=>{
                return <option value={e._id}>{e.nombre}</option>
            })}
            </select>
          </form>
          <button
            onClick={() => {
              let mitad1 = this.props.pizzas.find(o => o._id === document.getElementById('mitad1').value);
              let mitad2 = this.props.pizzas.find(o => o._id === document.getElementById('mitad2').value);
              
              let toPush = {
                nombre: 'Por mitades: ' +mitad1.nombre + ' y ' +  mitad2.nombre,
                precio: (mitad1.precioMediana / 2) + (mitad2.precioMediana / 2),
                tamanio: "Mediana"
              };
              this.props.click(toPush);
            }}
            className="btn btn-primary m-1"
          >
            Mediana
          </button>
          <button
            onClick={() => {
              let mitad1 = this.props.pizzas.find(o => o._id === document.getElementById('mitad1').value);
              let mitad2 = this.props.pizzas.find(o => o._id === document.getElementById('mitad2').value);
              let toPush = {
                nombre: 'Por mitades: ' +mitad1.nombre + ' y ' +  mitad2.nombre,
                precio: (mitad1.precioFamiliar / 2) + (mitad2.precioFamiliar / 2),
                tamanio: "Familiar"
              };
              this.props.click(toPush);
            }}
            className="btn btn-primary m-1"
          >
            Familiar
          </button>
        </div>
      </div>
    );
  }
}

export default PizzaMitades;
