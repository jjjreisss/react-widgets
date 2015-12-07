var React = require('react');

var WeatherClock = React.createClass({
  getInitialState: function() {
    return {currentTime: new Date(), currentCoordinates: "", weatherData: ""};
  },
  componentDidMount: function() {
    this.tickInterval = setInterval(this.tick, 1000);
    this.getPosition();
    // console.log(this.state.currentCoordinates);
    // this.getWeather(coords);
  },
  componentWillUnmount: function() {
    clearInterval(this.tickInterval);
  },
  getPosition: function() {
    return navigator
      .geolocation.getCurrentPosition(function(pos){
        this.getWeather(pos.coords);
      }.bind(this));
  },
  getWeather: function(coords) {
    // console.log(this.state.currentCoordinates);
    var xmlhttp = new XMLHttpRequest();
    var lat = coords.latitude;
    var lon = coords.longitude;

    xmlhttp.onreadystatechange = function() {
      var data = JSON.parse(xmlhttp.responseText);
      this.setState({
        weatherData: {
          temperature: data.main.temp,
          description: data.weather[0].description
        }
      });
      // console.log(data);
    }.bind(this);


    xmlhttp.open(
      "get",
      "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=645c5d39c7603f17e23fcaffcea1a3c1",
      true
    );
    xmlhttp.send();
  },
  tick: function() {
    this.setState({currentTime: new Date()});
  },
  render: function() {
    return(
      <div>
        {String(this.state.currentTime)}
        {
          "Temperature:" + this.state.weatherData["temperature"] + "K," +
          this.state.weatherData["description"]
        }
      </div>
    );
  }
});

module.exports = WeatherClock;
