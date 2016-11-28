var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return{
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;

    that.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function (data){
      that.setState({
        isLoading: false,
        location: location,
        temp: data.temp,
        temp_min: data.temp_min,
        temp_max: data.temp_max
      });
    }, function (errorMessage) {
      that.setState({isLoading: false})
      alert(errorMessage);
    });
  },
  render: function() {
    // we set this state below as ES6 desctructuring
    // to get temp and location down to WeatherMessage
    var {isLoading, temp, location, temp_min, temp_max} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3>Getting weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} temp_min={temp_min} temp_max={temp_max}/>;
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
