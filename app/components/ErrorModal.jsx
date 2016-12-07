var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
    getDefaultProps: function() {
        // defining default props
        return {
            title: 'Error - Something Went Wrong'
        };
    },
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired // this makes sure the message is required
    },
    componentDidMount: function() {
        var {title, message} = this.props;
        var modalMarkup = (
            <div id="error-modal" className="tiny reveal text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">
                        OK
                    </button>
                </p>
            </div>
        );
        // this stops the error of DOM mutation cause by foundation
        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        // this willl return the DOM node
        $(ReactDOM.findDOMNode(this)).html($modal);

        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();   // this make changes to the DOM that react doesn't work well with
                        // so we needed to move our render html into this componentDidMount function
    },
    render: function() {
        return (
            <div>
            </div>
        );
        
    }
});

module.exports = ErrorModal;