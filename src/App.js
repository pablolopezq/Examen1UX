import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import Weather from "./components/Weather";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ubicacion: "",
      temperatura: "",
      humedad: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(u, t, h) {
    this.setState({
      ubicacion: u,
      temperatura: t,
      humedad: h
    });
  }

  render() {
    return (
      <div className="App">
        <div className="box">
          <div className="row">
            <Form handleSubmit={this.handleSubmit} />
          </div>
          <div className="row">
            <Weather
              u={this.state.ubicacion}
              t={this.state.temperatura}
              h={this.state.humedad}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
