var React = require('react');

// var About = React.createClass({
//   render: function() {
//
//   }
// });

// stateless functional component
var About = (props) => {
  return (
    <div>
      <h3 className="text-center page-title">About</h3>
      <p>This is our about page.... Welcome</p>
    </div>
  );
};
module.exports = About;
