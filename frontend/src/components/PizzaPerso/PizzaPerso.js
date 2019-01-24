import React, { Component } from "react";
import CheckBox from "../CheckBox/CheckBox";

export class PizzaPerso extends Component {
  state = {
    ingredients: [
      {id: 1, value: "Piña", isChecked: false},
      {id: 2, value: "Pollo", isChecked: false},
      {id: 3, value: "Pepperoni", isChecked: false},
      {id: 4, value: "Ternera", isChecked: false},
      {id: 5, value: "Champiñones", isChecked: false}
    ]
  }

  handleCheckChieldElement = (event) => {
    let ingredients = this.state.ingredients
    ingredients.forEach(ingredient => {
       if (ingredient.value === event.target.value)
          ingredient.isChecked =  event.target.checked
    })
    this.setState({ingredients: ingredients})
  }


  render() {
    return (
      <div
        className="card"
        style={{ width: "21.5rem", backgroundColor: "#e8e9ea" }}
      >
        <img
          src="//www.dominospizza.es/images/margarita.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h3 className="card-title">A tu Gusto</h3>
          <p className="card-text">
            Nosotros calentamos el horno y tú nos dices cómo seguir: elige la
            masa, tus ingredientes favoritos, el queso que más te guste y báñala
            con la salsa que más te apetezca.
          </p>
          <form>
            {this.state.ingredients.map((ingredient) => {
            return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement}  {...ingredient} />)
          })}
          </form>
          <button
            onClick={() => {
              let ingredients = [];
              this.state.ingredients.forEach(e => {
                if (e.isChecked) {
                  ingredients.push(e.value);
                }
              });
              let base = 12.45;
              ingredients.forEach(e => {
                base = base + 2.5;
              });
              let toPush = {
                nombre: 'A tu Gusto',
                precio: base,
                ingredientes: ingredients,
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
              let ingredients = [];
              this.state.ingredients.forEach(e => {
                if (e.isChecked) {
                  ingredients.push(e.value);
                }
              });
              let base = 17.45;
              ingredients.forEach(e => {
                base = base + 2.5;
              });
              let toPush = {
                nombre: 'A tu Gusto',
                precio: base,
                ingredientes: ingredients,
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

export default PizzaPerso;
