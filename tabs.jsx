var React = require('react');

var Tabs = React.createClass({
  getInitialState: function(){
    return {selected: 1};
  },
  selectTab: function(idx){
    this.setState({selected: parseInt(idx)});
  },

  render: function(){
    var tabs = this.props.tabs;
    var selected = this.props.tabs[this.state.selected];
    var selectTab = this.selectTab;
    return(
      <div>
        <ul>
          {
            tabs.map(function(tab){
              return <li key={tabs.indexOf(tab)} onClick={selectTab.bind(this, tabs.indexOf(tab))}>{tab.title}</li>;
            })
          }
        </ul>

        <div>
          {selected.content}
        </div>
      </div>

    );
  }
});

module.exports = Tabs;
