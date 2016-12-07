var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h3 className="text-center page-title">Examples</h3>
      <p>here are a few example locations to try out!</p>
      <ol>
        <li>
          <Link to='/?location=London'>London, UK</Link>
        </li>
        <li>
          <Link to='/?location=Charlotte'>Charlotte, NC</Link>
        </li>
      </ol>
    </div>
  );
}
module.exports = Examples;
