import React, { Component } from "react";
import "../App.css";
import "../css/skeleton.css";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Ubicacion: "",
      Temperatura: "",
      Humedad: ""
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.setState({
      Ubicacion: this.props.u,
      Temperatura: this.props.t,
      Humedad: this.props.h
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h5>Ubicacion: {this.props.u}</h5>
        </div>
        <div className="row">
          <h5>Temperatura: {this.props.t}</h5>
        </div>
        <div className="row">
          <h5>Humedad: {this.props.h}</h5>
        </div>
      </div>
    );
  }
}

export default Weather;
