var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function() {
    return{
      isLoading: false,

    }
  },
  handleSearch: function(location) {
    var that = this;

    that.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined,
      temp_min: undefined,
      temp_max: undefined
  });

    openWeatherMap.getTemp(location).then(function (data){
      that.setState({
        isLoading: false,
        location: location,
        temp: data.temp,
        temp_min: data.temp_min,
        temp_max: data.temp_max
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },

  componentDidMount: function() {
    var location = this.props.location.query.location;

    if(location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

// this function below allows the parent to update the child prop
  componentWillReceiveProps: function (newProps) {
    var location = newProps.location.query.location;

    if(location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  render: function() {
    // we set this state below as ES6 desctructuring
    // to get temp and location down to WeatherMessage
    var {isLoading, temp, location, temp_min, temp_max, errorMessage} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3>Getting weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} temp_min={temp_min} temp_max={temp_max}/>;
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h3 className="text-center page-title">Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
