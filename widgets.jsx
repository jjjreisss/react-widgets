var React = require('react');
var ReactDOM = require('react-dom');
var Autocomplete = require('./autocomplete');

var dictionaryNames = ["Sam", "Molly", "David", "Alan", "Mary"];

var MyComponent = React.createClass({
  render: function() {
    return(
      <div>Widgets
        <Autocomplete dictionary={dictionaryNames}/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<MyComponent />, document.getElementById('main'));
});
