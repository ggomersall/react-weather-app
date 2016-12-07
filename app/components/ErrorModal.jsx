var React = require('react');

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
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function() {
        var {title, message} = this.props;
        return (
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
    }
});

module.exports = ErrorModal;