var React = require('react');
var ReactDOM = require('react-dom');
var Autocomplete = require('./autocomplete');
var WeatherClock = require('./weather_clock');
var Tabs = require('./tabs');

var dictionaryNames = ["Sam", "Molly", "David", "Alan", "Mary"];
var someTabs = [{title: "hello", content: "hello world"}, {title: "cats", content: "so many cats"}];

var MyComponent = React.createClass({
  render: function() {
    return(
      <div>Widgets
        <Autocomplete dictionary={dictionaryNames}/>
        <WeatherClock/>
        <Tabs tabs={someTabs}/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<MyComponent />, document.getElementById('main'));
});
