var axios = require("axios");

module.exports = {
  fetchClimate: function(city, country) {
    var encodedURI =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "," +
      country +
      "&appid=5fd698b3ff8cf421251cae54a65f966a&units=metric";

    return axios.get(encodedURI).then(function(response) {
      console.log(response.data);
      return response.data;
    });
  }
};
