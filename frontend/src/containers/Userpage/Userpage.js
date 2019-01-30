import React, {
    Component
} from 'react';
import axios from "axios";

export class Userpage extends Component {
    state = {
        user: {},
        pedidos: [],

    }
    componentWillMount() {
        axios.defaults.headers.common["Authorization"] = this.props.token;
        axios.post("http://localhost:3001/getuser", this.props.token).then(response => {
            console.log(response)
            this.setState({
                user: response.data.user,
            });
            axios.post("http://localhost:3001/getpedidos", {
                user: this.state.user.id
            }).then(response => {
                console.log(response)
                this.setState({
                    pedidos: response.data,
                })
            });
        });

    }
    render() {
        return (
            <div className="container pedidos">
              <h4>Tus pedidos</h4>
              <div className="row">
                    {this.state.pedidos.map((e) => {
                        console.log(e);
                      return (
                        <div className="col-l6 bloque">
                        <div className="card card-hover">
                        <div className="col-l6 bloque">
                        <h5 className="card-title">Num. pedido: {e._id}</h5>
                        </div>
       
                          <h5>Descripción de pedido:</h5>
                          {e.pedido.map(element => {
                            
                            return (
                                <p className="card-text"> {element.nombre} - {element.tamanio}: {element.precio}€</p>
                            )
                          })}
       
                          <h5 className="total">Precio total: {e.total} €</h5>
                          </div>
                          </div>
       
                      );
                    })}
       
              </div>
            </div>
          )
    }
}

export default Userpage