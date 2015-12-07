var React = require('react');

var Autocomplete = React.createClass({
  getInitialState: function(){
    return {searchField: "", searchResults: [], filledIn: ""};
  },
  search: function(e) {
    this.setState({searchField: e.target.value});
    console.log(this.state);
  },
  fillIn: function(e) {
    var text = e.target.textContent;
    this.setState({searchField: text});
    console.log(this.state);
  },
  render: function() {
    var matcher = new RegExp(this.state.searchField);
    var dictionary = this.props.dictionary;
    var filterCallback = function(dictionaryName){
      return dictionaryName.match(matcher) && dictionaryName.match(matcher).index === 0;
    };
    var fillIn = this.fillIn;
    return (
      <div>
        <h1>Test</h1>
        <input onInput={this.search} value={this.state.searchField}></input>
        <ul>
          {
            dictionary
              .filter(filterCallback)
              .map(function(matchedName){
                return <li onClick={fillIn}>{matchedName}</li>;
            })
          }
        </ul>
      </div>
    );
  },
});

module.exports = Autocomplete;
