import React, { Component } from "react";
import "../App.css";
import "../css/skeleton.css";
import api from "../utils/api";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ciudad: "",
      pais: ""
    };

    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCityChange(e) {
    this.setState({
      ciudad: e.target.value
    });
  }

  handleCountryChange(e) {
    this.setState({
      pais: e.target.value
    });
  }

  handleSubmit() {
    api.fetchClimate(this.state.ciudad, this.state.pais).then(
      function(data) {
        this.props.handleSubmit(
          data.name + ", " + data.sys.country,
          data.main.temp,
          data.main.humidity
        );
      }.bind(this)
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <input
            type="text"
            placeholder="Ciudad"
            className="columns four"
            onChange={this.handleCityChange}
          />
          <input
            type="text"
            placeholder="Pais"
            className="columns four"
            onChange={this.handleCountryChange}
          />
          <button
            type="submit"
            className="columns four"
            onClick={this.handleSubmit}
          >
            Obtener Clima
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
