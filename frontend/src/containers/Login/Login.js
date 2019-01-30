import React, { Component } from "react";
import axios from "axios";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
      username: '',
      username2: '',
      password2: '',
      logged: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }
  
  validateRegisterForm() {
    return this.state.email.length > 0 && this.state.password.length > 0 && this.state.username.length > 0;
  }

  validateLoginForm() {
    return this.state.username2.length > 0 && this.state.password2.length > 0;
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleRegisterSubmit() {
    let e = {
      password: this.state.password,
      username: this.state.username,
      email: this.state.email,
    };
    axios.post("http://localhost:3001/users/register", e).then(response => {
      console.log(response);
      sessionStorage.setItem('Authorization','Bearer '+response.data.token);
      if (response.status === 200) {
        this.props.fun();
      }
      
    });
  }

  handleLoginSubmit() {
    let e = {
      username: this.state.username2,
      password: this.state.password2,
    };
    axios.post("http://localhost:3001/users/login", e).then(response => {
      console.log(response);
      sessionStorage.setItem('Authorization','Bearer '+response.data.token);
      if (response.status === 200) {
        this.props.fun();
      }
    });
  }
  render() {
    
    return (
      
      <div className="container-fluid">
        <div className="container">
          <h2 className="text-center" id="title">
            Bienvenido a Telepizza
          </h2>
          <div className="row">
            <div className="col-md-5">
              <form >
                <fieldset>
                  <p className="text-uppercase pull-center">
                    Regístrate si aún no lo has hecho
                  </p>
                  <div className="form-group">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form-control input-lg"
                      placeholder="username"
                      onChange={this.handleChange}
                      value={this.state.username}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      onChange={this.handleChange}
                      id="email"
                      className="form-control input-lg"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={this.handleChange}
                      className="form-control input-lg"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                      Clickando aquí aceptas los términos y condiciones.
                    </label>
                  </div>
                  <div>
                    <input
                      type="button"
                      onClick={this.handleRegisterSubmit}
                      className="btn btn-lg btn-primary"
                      value="Register"
                      disabled={!this.validateRegisterForm()}
                    />
                  </div>
                </fieldset>
              </form>
            </div>

            <div className="col-md-2" />

            <div className="col-md-5">
              <form>
                <fieldset>
                  <p className="text-uppercase"> O inicia sesión </p>

                  <div className="form-group">
                    <input
                      type="text"
                      name="username2"
                      onChange={this.handleChange}
                      id="username2"
                      className="form-control input-lg"
                      placeholder="username"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password2"
                      onChange={this.handleChange}
                      id="password2"
                      className="form-control input-lg"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <input
                      type="button"
                      onClick={this.handleLoginSubmit}
                      className="btn btn-primary btn-md"
                      value="Iniciar Sesión"
                      disabled={!this.validateLoginForm()}
                    />
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
