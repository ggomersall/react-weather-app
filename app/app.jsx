var React = require('react');
var ReactDOM = require('react-dom');
// ES6 object desctructuring syntax for loading of react-route
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// The below would be how you write it in ES5
// var Route = require('react-router').Route;
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// Load foundation
// style!css! allows us to use the style loader and css loader
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
