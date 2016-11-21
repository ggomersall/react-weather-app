var React = require('react');
// use indexlink to stop multiple pages being show as activeClass if using IndexRoute
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Nav Component</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <Index to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Index>
        <Index to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Index>
      </div>
    );
  }
});

module.exports = Nav;
