var React = require('react');
var ReactDOM = require('react-dom');
// ES6 object desctructuring syntax for loading of react-route
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// The below would be how you write it in ES5
// var Route = require('react-router').Route;
var Main = require('Main');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

    </Route>
  </Router>,
  document.getElementById('app')
);
